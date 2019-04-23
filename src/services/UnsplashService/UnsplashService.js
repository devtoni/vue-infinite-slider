export default class UnsplashService {
  constructor ({ fetcher, config, mapper }) {
    this._fetcher = fetcher
    this._config = config
    this._mapper = mapper
    this._cache = []
  }

  async randomPhotos () {
    const self = this
    const url = this._config.RANDOM_PHOTOS

    if (!this._cache.length) {
      // we wrap the assignment with parenthesis to let know js that it is a block
      ;({ data: this._cache } = await this._fetcher.get(url, {
        headers: {
          Authorization: `Client-ID ${
            process.env.VUE_APP_UNSPLASH_API_ACCESS_KEY
          }`
        }
      }))
    }

    return {
      [Symbol.asyncIterator]: async function * () {
        if (self._cache.length) {
          /* Imagine that for each element we need to make
          a new request to obtain something else so we yield the value
          in the array iterator making the request for each el,
          if we want to just return the array spliced with the promises, then remove the * */
          yield * self._cache
            .splice(0, 5) // I want mutation here
            .map(val => Promise.resolve(self._mapper.map(val)))
        }
      }
    }
  }
}

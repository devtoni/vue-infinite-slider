export default class Fetcher {
  constructor ({ httpClient }) {
    this._httpClient = httpClient
  }

  get (url = '', config = {}) {
    return this._httpClient.get(url, { ...config })
  }
}

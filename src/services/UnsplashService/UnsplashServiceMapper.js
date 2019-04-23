export default class UnsplashServiceMapper {
  map (result = {}) {
    return {
      url: this._url(result),
      creditsTo: this._photoBy`Photo by ${result}`,
      profileUrl: this._profileUrl`https://unsplash.com/@${result}`
    }
  }

  _url = ({ urls: { regular = '' } } = {}) => regular

  _photoBy = (string, { user: { name = '' } } = {}) => string.join(name)

  _profileUrl = (string, { user: { username = '' } } = {}) =>
    string.join(username)
}

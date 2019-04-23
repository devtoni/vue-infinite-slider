import { FETCH_RANDOM_PHOTOS, CLEAR_RANDOM_PHOTOS } from './actions.type'
import { unsplashService } from '@/services/UnsplashService'

export default {
  async [FETCH_RANDOM_PHOTOS] ({ commit }) {
    const photos = []
    for await (const photo of await unsplashService.randomPhotos()) {
      photos.push(photo)
    }
    commit('randomPhotos', photos)
  },
  async [CLEAR_RANDOM_PHOTOS] ({ commit }) {
    commit('randomPhotos', [])
  }
}

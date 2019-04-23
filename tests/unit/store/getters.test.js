import { getters } from '@/store'
import { unsplashServiceResultOnFirstCall } from '../../fixtures/unsplashService'

describe('Getters should', () => {
  it('return randomPhotos', () => {
    const randomPhotos = getters.getRandomPhotos({
      randomPhotos: unsplashServiceResultOnFirstCall
    })
    expect(randomPhotos).toEqual(unsplashServiceResultOnFirstCall)
  })
})

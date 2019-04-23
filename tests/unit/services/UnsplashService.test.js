import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import unsplashResponse from '../../fixtures/unsplashResponse'
import { unsplashService } from '@/services/UnsplashService'
import { unsplashServiceResultOnFirstCall, unsplashServiceResultOnSecondCall } from '../../fixtures/unsplashService'

const axiosClient = new MockAdapter(axios)

describe('Unsplash Service should', () => {
  beforeAll(() => {
    const accessKey = 'accesskey'
    axiosClient
      .onGet('https://api.unsplash.com/photos/random?count=30', {
        Authorization: `Client-ID ${accessKey}`
      })
      .reply(200, unsplashResponse)
  })

  it('return the first five elements on its first call', async () => {
    const results = []

    for await (const val of await unsplashService.randomPhotos()) {
      results.push(val)
    }

    expect(results).toEqual(unsplashServiceResultOnFirstCall)
  })

  it('return the next five elements on its second call', async () => {
    const results = []

    for await (const val of await unsplashService.randomPhotos()) {
      results.push(val)
    }

    expect(results).toEqual(unsplashServiceResultOnSecondCall)
  })
})

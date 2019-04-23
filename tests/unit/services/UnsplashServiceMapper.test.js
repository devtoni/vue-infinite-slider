import unsplashResponse from '../../fixtures/unsplashResponse'
import { unsplashServiceResultOnFirstCall } from '../../fixtures/unsplashService'
import { unsplashServiceMapper } from '@/services/UnsplashService'

describe('Unsplash Service Mapper should', () => {
  it('map the unsplash response and return the needed data with the expected format', () => {
    const result = unsplashServiceMapper.map(unsplashResponse[0])

    expect(result).toEqual(unsplashServiceResultOnFirstCall[0])
  })
})

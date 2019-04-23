import { actions } from '@/store'
import { FETCH_RANDOM_PHOTOS } from '@/store/actions.type'
import { CLEAR_RANDOM_PHOTOS } from '../../../src/store/actions.type'

jest.mock('axios', () => ({
  get: jest.fn().mockResolvedValue({ data: [] })
}))

describe('Actions should', () => {
  let commit
  beforeEach(() => {
    commit = jest.fn()
  })

  it('fetch for a random photos from unsplash service', async () => {
    await actions[FETCH_RANDOM_PHOTOS]({ commit })
    expect(commit).toHaveBeenCalled()
  })

  it('clear the previous randomPhotos', () => {
    actions[CLEAR_RANDOM_PHOTOS]({ commit })
    expect(commit).toHaveBeenCalled()
  })
})

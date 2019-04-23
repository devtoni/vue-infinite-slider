import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Slider from '@/components/Slider'
import {
  unsplashServiceResultOnFirstCall,
  unsplashServiceResultOnSecondCall
} from '../../fixtures/unsplashService'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Slider should', () => {
  let wrapper
  let actions
  let state
  let getters
  let store
  beforeEach(() => {
    state = {
      randomPhotos: unsplashServiceResultOnFirstCall
    }
    getters = {
      getRandomPhotos: jest
        .fn()
        .mockImplementationOnce(() => unsplashServiceResultOnFirstCall)
        .mockImplementationOnce(() => unsplashServiceResultOnSecondCall)
    }
    actions = {
      FETCH_RANDOM_PHOTOS: jest.fn()
    }
    store = new Vuex.Store({
      state,
      getters,
      actions
    })
    wrapper = shallowMount(Slider, {
      localVue,
      store
    })
  })
  it('displays the data', () => {
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.findAll('b-carousel-slide-stub').length).toBe(5)
  })
})

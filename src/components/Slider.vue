<template>
  <div class="Slider">
    <b-carousel
      id="carousel-1"
      class="Carousel"
      :interval="3000"
      controls
      fade
      indicators
      background="#ababab"
      @sliding-start="onSlideEnd"
    >
      <b-carousel-slide v-for="(randomPhoto, index) in getRandomPhotos" :key="index">
        <img slot="img" class="d-block w-100" height="720" :src="randomPhoto.url" alt="image slot">
        <p>{{randomPhoto.creditsTo}}</p>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '@/store'
import { FETCH_RANDOM_PHOTOS, CLEAR_RANDOM_PHOTOS } from '@/store/actions.type'

export default {
  name: 'Slider',
  data: () => ({
    prevSlide: 0
  }),
  computed: {
    ...mapGetters(['getRandomPhotos'])
  },
  mounted () {
    store.dispatch(FETCH_RANDOM_PHOTOS).then(() => {
      this.isLoaded = true
    })
  },
  methods: {
    async onSlideEnd (slide) {
      if (slide === 0 && this.prevSlide === 3) {
        await this.handleRandomPhotosRenewal()
      } else {
        this.prevSlide = slide - 1 < 0 ? 0 : slide - 1
      }
    },
    async handleRandomPhotosRenewal () {
      await Promise.all([
        store.dispatch(CLEAR_RANDOM_PHOTOS),
        store.dispatch(FETCH_RANDOM_PHOTOS)
      ])
    }
  }
}
</script>

<style lang="scss" scoped>
.Slider {
  width: 80%;
  .Carousel {
    text-shadow: 1px 1px 2px #333;
  }
}
</style>

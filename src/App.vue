<template>
  <div id="app" class="VueApp">
    <Slider/>
  </div>
</template>

<script>
import Slider from '@/components/Slider'

export default {
  name: 'app',
  components: {
    Slider
  }
}
</script>

<style scoped>
.VueApp {
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
}
</style>

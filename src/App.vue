<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template> 
  <div class="font-Gill">
    <RouterView />
  </div>
</template>

<style scoped>
/* import the font */
@font-face {
  font-family: 'Gills';
  src: url('~@/assets/fonts/Gills-Sans-Font-Family/Gill-Sans-Medium.otf') format('truetype');
}

/* use the font */
.my-element {
  font-family: 'gills';
}
</style>

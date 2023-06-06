<template>
  <img :src="imageLink" class="placeholder: h-12 w-12 rounded-3xl object-contain" />
</template>

<script>
export default {
  name: 'ProfileImage',
  data() {
    return {
      imageLink:
        'https://www.pngitem.com/pimgs/m/399-3992589_super-mario-3d-world-mario-icon-hd-png.png'
    }
  }
}
</script>

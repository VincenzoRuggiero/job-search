<template>
  <button :class="buttonClass">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'ActionButton',
  props: ['text', 'type'],
  computed: {
    buttonClass() {
      return {
        // primary: this.type === 'primary',
        // secondary: this.type === 'secondary'
        [this.type]: true // è come scrivere le stesse cose di sopra
      }
    }
  }
}
</script>

<style scoped>
button {
  @apply rounded px-5 py-3 font-medium;
}

.primary {
  @apply border-0 bg-brand-blue-1 text-white hover:shadow-blue;
}
.secondary {
  @apply bg-transparent text-brand-blue-1 hover:bg-brand-blue-2 hover:text-white;
}
</style>

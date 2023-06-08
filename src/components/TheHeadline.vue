<template>
  <section>
    <h1 class="mb-14 text-8xl font-bold tracking-tighter">
      <span :class="actionClasses">{{ action }}</span>
      <br />
      for everyone
    </h1>
    <h2 class="text-3xl font-light">Find your next job at Jobbing</h2>
  </section>
</template>

<script>
import nextElementInList from '@/utils/newElementInList.js'

export default {
  name: 'TheHeadline',
  data() {
    return {
      action: 'Build',
      interval: null
    }
  },
  computed: {
    actionClasses() {
      // Applies the right class color based on data
      return {
        /* build: this.action === 'Build',
        create: this.action === 'Create',
        design: this.action === 'Design',
        code: this.action === 'Code' */
        [this.action.toLowerCase()]: true // Refactor to get the same result
      }
    }
  },
  created() {
    // When component is loaded the method starts working
    this.changeTitle()
  },
  beforeUnmount() {
    // When leaving the page, setInterval is stopped
    clearInterval(this.interval)
  },
  methods: {
    changeTitle() {
      // Loops through actions everye 3 secs and updates data
      this.interval = setInterval(() => {
        const actions = ['Build', 'Create', 'Design', 'Code']
        this.action = nextElementInList(actions, this.action)
      }, 3000)
    }
  }
}
</script>

<style scoped>
.build {
  color: #1a73e8;
}

.create {
  color: #34a853;
}

.design {
  color: #f9ab00;
}

.code {
  color: #d93025;
}
</style>

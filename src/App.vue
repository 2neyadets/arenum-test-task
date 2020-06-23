<template lang="pug">
  div(id="app" )
    template(v-if="list.length === 0")
      .flex.flex-center(style="height: 100vh;")
        h2.text-white Загружаем...
    template(v-else)
      template(v-for="(tournament, index) in list")
        Card(:tournament="tournament.tournamentData" :key="tournament.tournamentCode + index")
</template>

<script>
import './css/app.styl'
import api from './api'
import Card from './components/Card'

export default {
  name: 'App',
  components: { Card },
  data () {
    return {
      list: [],
      start: 0,
      allowScrollHandler: true,
      lastScrollTop: 0,
    }
  },
  async created () {
    this.list = await this.getTournaments()
  },
  mounted () {
    window.addEventListener('scroll', this.scrollHandler)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.scrollHandler)
  },
  methods: {
    async getTournaments () {
      const res = await api.getGameTournaments(this.start)
      if (res.status === 200) {
        this.start += res.data.length
        return res.data
      }
      return []
    },
    async scrollHandler (event) {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      if (this.allowScrollHandler && scrollTop > this.lastScrollTop) {
        const windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom,
          clientHeight = document.documentElement.clientHeight
        if (windowRelativeBottom < (clientHeight * 1.25)) {
          this.allowScrollHandler = false
          const start = this.start,
            newTournaments = await this.getTournaments()
          newTournaments.forEach(item => this.list.push(item))
          if (start !== this.start) this.allowScrollHandler = true
        }
      }
      this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
    }
  },
}
</script>

<style scoped lang="stylus">
</style>

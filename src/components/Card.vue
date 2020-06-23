<template lang="pug">
  .card.full-width.bg-black.text-white.row.cursor-pointer
    .card__img.col-auto.px-md
      .w-60px.h-60px(:style="style")
    .card__info.col.py-lg.pr-md.column.justify-between.items-start
      .card__info--started {{getRusDate(tournament.startedAt)}}
      .card__info--name.row.items-center
        template(v-if="tournament.paymentType === 'free'")
          img.type(src="../assets/free.png")
        template(v-else)
          img.type(src="../assets/ticket.png")
        .title {{tournament.name}}
      .card__info--descriptor
        | {{tournament.tournamentType.gameMode}}
        | &#8226; {{tournament.participateCount}}/{{tournament.maxUsers}}
        | &#8226; Призовой фонд {{tournament.prizeTable.reduce((acc, item) => acc + item, 0)}} руб.
</template>

<script>
import moment from 'moment/moment'
moment.locale('ru')

export default {
  name: 'Card',
  props: {
    tournament: Object,
    required: true,
  },
  data () {
    return {
    }
  },
  computed: {
    style () {
      return {
        'border-radius': '10%',
        background: `url(${this.tournament.cardImage + '?width=300&height=300'}) no-repeat center center`,
        'background-size': 'cover',
      }
    },
  },
  methods: {
    getRusDate (dateString) {
      return moment(dateString).calendar(null, {
        sameElse: 'DD.MM.YYYY, в HH:MM'
      })
    }
  },
}
</script>

<style scoped lang="stylus">
  $text-color = #F2F2F2

  .card

    &:hover &__info
      box-shadow: 0 0.5px 0 rgba(242, 242, 242, 0.5)

    &__img
      padding 18px 16px 18px 20px
      border-radius 8px

    &__info
      padding 18px 16px 18px 0
      box-shadow: 0 0.5px 0 #2E3038
      letter-spacing -0.2px

      &--started
        color $text-color
        font-weight 500px
        font-size 11px
        line-height 14px
        letter-spacing 0.2px
        text-transform uppercase

      &--name

        .type
          padding-right 6px

        .title
          color $text-color
          font-weight 500
          font-size 17px
          line-height 24px

      &--descriptor
        font-weight 300
        font-size 15px
        line-height 20px
        color #5C5E66
</style>

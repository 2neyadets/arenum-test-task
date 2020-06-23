import api from './instance'

export default {

  getGameTournaments: async (start = 0, max = 15) => {
    const params = {
      start,
      max,
      gameCode: 'f533d4be-5b8e-11e9-8647-d663bd873d93',
      includePaid: true,
    }
    try {
      return await api.get('games/v2/', { params })
    } catch (e) {
      if (process.env.NODE_ENV === 'development') console.warn('catch :: getGameTournaments', e)
    }
  }

}

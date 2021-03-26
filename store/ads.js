export const state = () => ({
    ads:[]
})

export const mutations = {
    setAds(state, ads){
        state.ads = ads
    }
}

export const actions = {
    async GET_ADS({commit}, {page}){
        const ads = await this.$axios.$get(`https://gorest.co.in/public-api/products/?page=${page}`)
        commit('setAds', ads)
    }
}

export const getters = {
    ads: state => state.ads,
    ad: state => id => state.ads.data.find(ad => ad.id === id)
}
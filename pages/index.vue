<template>
  <div class="container">
    <div class="ads">
      <ul class="ads__items">
        <li 
          v-for="ad of ads.data"
          :key="ad.id"
          class="ads__item"
        >
          <AdCard :ad="ad"/>
        </li>
      </ul>
      <div class="ads__paginate">
        <Paginate
          @page-change="(page)=>{getAds(page)}"
          :total="totalPageCount"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Paginate from '~/components/Paginate'
import AdCard from '~/components/AdCard';

export default {
  async fetch({store}){
    if(store.getters['ads/ads'].length === 0){
        await store.dispatch('ads/GET_ADS', {page: 1})
    }
  },
  computed:{
    ads: function(){
      return this.$store.getters['ads/ads']
    },
    totalPageCount: function(){
      return this.ads.meta.pagination.pages
    },
  },
  components:{
    AdCard,
    Paginate
  },
  methods:{
    getAds(page){
      this.$store.dispatch('ads/GET_ADS', {page: page})
    }
  }
}
</script>

<style>

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

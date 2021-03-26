<template>
    <div>
        <h1>Ad: {{ad.name}}</h1>
        <img :src="ad.image" alt="ad">
    </div>
</template>

<script>
export default {
    computed:{
        ad(){
            return this.$store.getters['ads/ad'](Number(this.$route.params.id))
        }
    },
    validate({params}){
        return /^\d+$/.test(params.id)
    }
}
</script>
<template>
    <div class="ad">
        <h2>{{ad.name}}</h2>
        <p>{{ad.description}}</p>
        <b :class="{disabled: ad.discount_amount}">{{ad.price}}</b>
        <b v-if="ad.discount_amount">{{ad.discount_amount}}</b>
        <a 
            class="ad__link-to-ad" 
            @click.prevent="openAd(ad.id)"
        >
            Переглянути
        </a>
    </div>
</template>

<script>
export default {
    props:{
        ad: Object
    },
    methods:{
        openAd(id){
            this.$router.push(`/${id}`)
        }
    }
}
</script>

<style lang="scss" scoped>
    .ad{
        margin: 20px;

        &__link-to-ad{
            color: rgba(23, 102, 23, 0.521);
        }
    }
    .disabled{
        opacity: 0.5;
        text-decoration: line-through;
    }
</style>
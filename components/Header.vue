<template>
    <header>
        <div class="header">
            <div class="header__logo">
                <img class="logo" :src="require('~/assets/images/logo.png')" alt="">
            </div>
        </div>
    </header> 
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
@import '~/assets/colors.scss';
.header{
    background-color: $primary;

    padding: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    &__logo{

    }
}
</style>
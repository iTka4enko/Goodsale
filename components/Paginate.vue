<template>
    <nav>
        <div class="pagination">
            <div 
                @click="prevPage"
                class="pagination__link"
                :class="{disabled: currentPage === 1}"
            >Prev</div>
            <ul>
                <li 
                    v-for="p in total"
                    :key="p"
                    class="pagination__link"
                >
                    <button
                        @click="()=>{changePage(p)}"
                        class="pagination__button"
                        :class="{active: p === currentPage}"
                    >{{p}}</button>
                </li>
            </ul>
            <div 
                @click="nextPage"
                class="pagination__link"
                :class="{disabled: currentPage === total}"
            >Next</div>
        </div>
    </nav>
</template>

<script>
export default {
    props:{
        total: Number,
    },
    data(){
        return{
            currentPage: 1
        }
    },
    methods:{
        changePage(pageNumber){
            this.currentPage = pageNumber
            this.$emit('page-change', pageNumber)
        },
        prevPage(){
            if(this.currentPage > 1){
                this.changePage(this.currentPage-1)
            }
        },
        nextPage(){
            if(this.currentPage < this.total){
                this.changePage(this.currentPage+1)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.pagination{
    display: flex;
    align-items: center;
    justify-content: center;

    &__link{
        margin: 10px;
        cursor: pointer;
    }
    .disabled{
        opacity: 0.5;
    }

    ul{
        display: flex;
        justify-content: center;
    }
    &__button{
        padding: 5px;
    }
    .active{
        background-color: green;
    }
}
</style>
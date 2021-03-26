<template>
    <footer>
        <div class="footer">
            <div class="container">
                <div class="footer__form">
                    <form 
                        action=""
                        @submit.prevent
                    >
                        <h2>Бажаєте отримувати більше новин? </h2> 
                        <hr>
                        <div class="footer__form-main">
                            <div class="footer__input-wrapper">
                                <input 
                                    type="text" 
                                    name="email"
                                    :class="{error: emailValidations}"
                                    v-model="email"
                                >
                                <label for="email">
                                    {{emailErrorText}}
                                </label>
                            </div>
                            <div class="footer__input-wrapper">
                                <input 
                                    type="text" 
                                    name="name"
                                    :class="{error: nameValidations}"
                                    v-model="name"
                                >
                                <label for="name">
                                    {{nameErrorText}}
                                </label>
                            </div>
                            <button @click="sendData">Підписатися</button>
                        </div>
                    </form>
                </div>
                <div class="footer__bottom">
                    <img class="logo logo--small" :src="require('~/assets/images/logo.png')" alt="">
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import {email, required, minLength, maxLength} from 'vuelidate/lib/validators'

export default {
    data(){
        return{
            email:'',
            name: ''
        }
    },
    validations:{
        email: {email, required, maxLength: maxLength(100)},
        name: {required, minLength: minLength(2), maxLength: maxLength(100)}
    },
    computed:{
        emailValidations(){
            return (this.$v.email.$dirty && !this.$v.email.required) || (this.$v.email.$dirty && !this.$v.email.email) || (this.$v.email.$dirty && !this.$v.email.maxLength)
        },
        nameValidations(){
            return  (this.$v.name.$dirty && !this.$v.name.required) || (this.$v.name.$dirty && !this.$v.name.minLength) || (this.$v.name.$dirty && !this.$v.name.maxLength)
        },
        emailErrorText(){
            return (this.$v.email.$dirty && !this.$v.email.required) ? 'Enter your email' : (this.$v.email.$dirty && !this.$v.email.email) ? 'Email invalid' : (this.$v.email.$dirty && !this.$v.email.maxLength) ? `Max ${this.$v.email.$params.maxLength.max} symbols` : 'Email'
        },
        nameErrorText(){
            return (this.$v.name.$dirty && !this.$v.name.required) ? 'Enter your name' : (this.$v.name.$dirty && !this.$v.name.minLength) ? `At least ${this.$v.name.$params.minLength.min} symbols` : (this.$v.name.$dirty && !this.$v.name.maxLength) ? `Max ${this.$v.name.$params.maxLength.max} symbols` : 'Ваше імя'
        },
        isKyr(){
            return /[а-я]/i.test(this.name);
        }
    },
    methods:{
        sendData(){
            if(this.$v.$invalid){
                this.$v.$touch()
                return
            }

            console.log('great')
        },
    }
}
</script>

<style lang="scss" scoped>
@import '~/assets/colors.scss';

.footer{
    background-color: $primary;

    display: flex;
    flex-flow: column;
    align-items: center;

    flex: 0 0 auto;

    &__form-main{
        display: flex;

        button{
            margin-left: 30px;
        }
    }
    &__input-wrapper{
        display: flex;
        flex-direction: row-reverse;
        align-items: center;

        input{
            margin-left: 10px;
        }
    }
    &__bottom{

    }
    .error{
        border: 1px solid red;

        & + label{
            color: red;
        }
    }
}
</style>
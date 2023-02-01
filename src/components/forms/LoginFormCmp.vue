<template>
    <form class="auth-page-form-login">
        <span class="auth-page-form-login-name">
            Вход
        </span> 
        <div class="auth-page-form-login-input-section">
            <input-cmp placeholder="Почта" />
            <span class="warning-text">{{ warningMessage }}</span>
            <input-cmp placeholder="Пароль" inputType="password" />
            <span class="warning-text">{{ warningMessage }}</span>
        </div>

        <div class="auth-page-form-login-button-section">
            <button-cmp btnName="Войти"
                @click-handler="login" />
            <button-cmp btnName="Зарегистрироваться"
                @click-handler="toRegistration" />
        </div>
    </form>
</template>

<script lang="ts">
import { ref } from 'vue'
import InputCmp from '../ui/InputCmp.vue';
import ButtonCmp from '../ui/ButtonCmp.vue';

    export default {
        components: {
            InputCmp,
            ButtonCmp
        },

        setup( props, { emit }: any ) {

            const warningMessage = ref( '* Поле не должно быть пустым' )

            emits: [ 'to-registration' ]

            const login = (): void => {
                console.log( 'login' );
            }

            const toRegistration = (): void => {
                emit( 'to-registration', false )
            }

            return {
                login,
                toRegistration,
                warningMessage
            }
        }
        
    }

</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.auth-page-form-login {
    @include flexCol( flex-start, center );
    width: 300px;
    padding: 0px 10px;
    margin: 0px 0px;
    border: $main-border;
    border-radius: $main-border-radius;
    outline: none;
    color: $main-color;
    background-color: $main-white; 
    box-shadow: $main-shadow;

    &-name {
        @include flexRow( flex-start, center );
        @include font( 20px, normal );
        height: 40px;
        width: 90%;
    }

    &-input-section {
        @include flexCol( space-between, center );
        margin-top: 30px;
        min-height: 125px;
        width: 84%;
    }

    &-button-section {
        @include flexCol( space-between, center );
        margin: 30px 0px 25px 0px;
        height: 80px;
        width: 95%;
    }
}
</style>
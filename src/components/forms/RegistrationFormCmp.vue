<template>
    <form class="registration-page-form-login">
        <span class="registration-page-form-login-name">
            Регистрация
        </span> 
        <div class="registration-page-form-login-input-section">
            <input-cmp placeholder="Почта" />
            <span class="warning-text">{{ warningMessage }}</span>
            <input-cmp placeholder="Пароль" inputType="password" />
            <span class="warning-text">{{ warningMessage }}</span>
            <input-cmp placeholder="Подтвердите пароль" inputType="password" />
            <span class="warning-text">{{ warningMessage }}</span>
        </div>

        <div class="registration-page-form-login-button-section">
            <button-cmp btnName="Зарегистрироваться"
                @click-handler="registration" />
            <button-cmp btnName="Вернуться"
                @click-handler="toLogin" />
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

        setup( props: any, { emit }: any ) {

            emits: [ 'to-login' ]

            const warningMessage = ref<string>( '* Поле не должно быть пустым' )

            const registration = (): void => {
                console.log( 'Registration run' )
            }

            const toLogin = (): void => {
                emit( 'to-login', true )
                
            }

            return {
                registration,
                toLogin,
                warningMessage
            }
        }
        
    }

</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.registration-page-form-login {
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
        height: 185px;
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
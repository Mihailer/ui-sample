<template>
    <div class="auth-page">
        <login-form-cmp v-if="loginForm"
            @to-registration="toRegistration" />
        <registration-form-cmp v-if="!loginForm"
            @to-login="toLogin" />
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import LoginFormCmp from '../forms/LoginFormCmp.vue';
import RegistrationFormCmp from '../forms/RegistrationFormCmp.vue';

    export default {

        components: {
            LoginFormCmp,
            RegistrationFormCmp
        },

        setup() {

            const loginForm = ref( true )

            const toRegistration = ( state: boolean ): void => {
                loginForm.value = state
            }

            const toLogin = ( state: boolean ): void => {
                loginForm.value = state
            }

            return {
                loginForm,
                toRegistration,
                toLogin
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.auth-page {
    @include flexRow( center, center );
    height: 100vh;
    width: 100vw;
    background-color: $main-color;
}


</style>
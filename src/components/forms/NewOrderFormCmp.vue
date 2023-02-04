<template>
    <form class="service-new-order-modal-input-section">
            <div class="service-new-order-modal-input-section-form-client">
                <span class="head-text">{{ serviceNewOrderData.sectionTextClient }}</span>
                <input-cmp v-for="( fieldName, fieldNameIndex ) in serviceNewOrderData.newOrderClientData"
                    :key="fieldNameIndex"
                    :placeholder="fieldName" />
                <span class="warning-text">{{ warningText }}</span>
            </div>
            <div class="service-new-order-modal-input-section-form-device">
                <span class="head-text">{{ serviceNewOrderData.sectionTextDevice }}</span>
                <input-cmp v-for="( fieldName, fieldNameIndex ) in serviceNewOrderData.newOrderDeviceData"
                    :key="fieldNameIndex" :placeholder="fieldName" />
                <span class="warning-text">{{ warningText }}</span>
            </div>
        </form>
</template>

<script lang="ts">
import { ref } from 'vue'
import InputCmp from '../ui/InputCmp.vue';
import { serviceNewOrderData } from '@/assets/data/data'

    export default {

        components: {
            InputCmp
        },
        
        setup() {
            const warningText = ref( 'Заполните все поля отмеченные " * "' )

            return {
                warningText,
                serviceNewOrderData
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.service-new-order-modal-input-section {
        @include flexCol( flex-start, center );
        height: 95%;
        min-width: 300px;
        width: 20%;
        margin: 15px 0px 15px 15px;
        border: $main-border;
        border-radius: $main-border-radius;
        outline: none;
        box-shadow: $main-shadow;
        background-color: $main-white;

        &-form-client {
            @include flexCol( space-between, center );
            height: 35%;
            width: 80%;
            margin: 20px 0px 0px 0px;
            padding: 10px 20px 0px 20px;
            outline: none;
            background-color: $main-white;

            @media screen and ( max-width: 1440px ) {
                height: 40%;
                margin: 10px 0px 0px 0px;
            }

        }

        &-form-device {
            @include flexCol( space-between, center );
            height: 45%;
            width: 80%;
            margin: 20px 0px 0px 0px;
            padding: 10px 20px 0px 20px;
            outline: none;
            // box-shadow: $main-shadow;
            background-color: $main-white;

            @media screen and ( max-width: 1440px ) {
                margin: 10px 0px 0px 0px;
                height: 50%;
            }

        }
    }
</style>
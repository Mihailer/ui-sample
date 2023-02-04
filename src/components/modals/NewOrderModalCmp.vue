<template>
    <div class="service-new-order-modal">
        <new-order-form-cmp />

        <div class="service-new-order-modal-services-section">
            <div class="service-new-order-modal-services-section-add-service">
                <table-group-cmp :showControls="false"
                    tableHeight="42vh"
                    :headerControlPanel="headerControlPanelService"
                    :tableHeaderData="tableServiceItemsData" 
                    :tableData="tableServiceData"
                        @input-handler="inputHandler"
                        @show-table-item="showTableItem"
                        @click-handler="clickHandler"
                        @emit-select-value="emitSelectValue" />
                        
            </div>
            <div class="service-new-order-modal-services-section-add-button">
                <button-cmp btnName="Добавить услугу" />
            </div>
            
        </div>
    </div>
</template>

<script lang="ts">
// import { ref } from 'vue'
import NewOrderFormCmp from '../forms/NewOrderFormCmp.vue';
import InputCmp from '../ui/InputCmp.vue';
import ButtonCmp from '../ui/ButtonCmp.vue';
import TableGroupCmp from '../tables/TableGroupCmp.vue';

import
    { 
        tableServiceData, 
        tableServiceItemsData, 
        headerControlPanelService 
    } from '@/assets/data/data'

    export default {

        components: {
            NewOrderFormCmp,
            InputCmp,
            ButtonCmp,
            TableGroupCmp
        },
        
        setup() {

            const inputHandler = ( text: string ): void => {
            console.log( 'inputHandler : ' + `${ text }` );
        }

        const clickHandler = (): void => {
            console.log( 'clickHandler newOrderModal' );
        }

        const showTableItem = ( data: object ): void  => {
            console.log( data );
        }

        const emitSelectValue = ( data: string ): void => {
            console.log( data );
        }

            return {
                tableServiceItemsData,
                tableServiceData,
                headerControlPanelService,

                inputHandler,
                clickHandler,
                showTableItem,
                emitSelectValue
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.service-new-order-modal {
    @include flexRow( space-between, center );
    height: 70%;
    width: 60%;
    border: $main-border;
    border-radius: $main-border-radius;
    outline: none;
    box-shadow: $main-shadow;
    background-color: $main-white;

    @media screen and ( max-width: 1440px ) {
        height: 90%;
        width: 75%;
    }

    &-services-section {
        @include flexCol( flex-start, center );
        height: 95%;
        min-width: 300px;
        width: 70%;
        margin: 0px 10px 4px 15px;
        // border: $main-border;
        // border-radius: $main-border-radius;
        background-color: $main-white;

        &-add-service {
            @include flexCol( space-between, center );
            max-height: 50%;
            width: 100%;
            margin: 0px 0px 15px 0px;
            outline: none;
            background-color: $main-white;
        }

        &-add-button {
            @include flexRow( flex-end, center );
            height: 40px;
            width: 100%;
            margin: 0px 5px 0px 0px;
        }
    }
}
</style>
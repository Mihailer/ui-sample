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
            <div class="service-new-order-modal-services-section-total-data">

                <div class="service-new-order-modal-services-section-total-data-total-cost">
                    <span class="service-new-order-modal-services-section-total-data-total-cost-text">
                        Итоговая стоимость услуг
                    </span>
                    <span class="service-new-order-modal-services-section-total-data-total-cost-text">
                        {{ totalCost( tableServiceData, 'partsCost', 'workCost' ) }} &#8381;
                    </span>
                </div>

                <div class="service-new-order-modal-services-section-total-data-buttons">
                   <div class="backdrop maxWidth">
                        <select-cmp :selectName="newOrderSelectPayType.name" 
                            :selectFieldItem="newOrderSelectPayType.type"
                            @emit-select-value="emitSelectValue" />

                        <select-cmp :selectName="newOrderSelectPayMethod.name" 
                            :selectFieldItem="newOrderSelectPayMethod.method"
                            @emit-select-value="emitSelectValue" />

                        <input-cmp placeholder="Сумма оплаты" />
                   </div>
                   <div class="backdrop maxWidth flex-end z10">
                        <button-cmp btnName="Создать заказ" />
                        <button-cmp btnName="Отмена" />
                   </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script lang="ts">
import NewOrderFormCmp from '../forms/NewOrderFormCmp.vue';
import InputCmp from '../ui/InputCmp.vue';
import ButtonCmp from '../ui/ButtonCmp.vue';
import TableGroupCmp from '../tables/TableGroupCmp.vue';

import SelectCmp from '../ui/SelectCmp.vue';
import { newOrderSelectPayType, newOrderSelectPayMethod } from '@/assets/data/data'
import { totalCost } from '../cmpUtils'

import
    { 
        tableServiceData, 
        tableServiceItemsData, 
        headerControlPanelService 
    } 
    from '@/assets/data/data'

    export default {

        components: {
            NewOrderFormCmp,
            InputCmp,
            ButtonCmp,
            TableGroupCmp,
            SelectCmp
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
                newOrderSelectPayType,
                newOrderSelectPayMethod,
                inputHandler,
                clickHandler,
                showTableItem,
                emitSelectValue,
                totalCost,
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
        @include flexCol( space-between, center );
        height: 95%;
        width: 70%;
        margin: 0px 15px 4px 15px;
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
            margin: 0px 5px 15px 0px;
        }

        &-total-data {
            @include flexCol( space-between, center );
            height: 45%;
            min-width: 300px;
            width: 98%;
            margin: 0px 15px -3px 15px;
            border-radius: $main-border-radius;
            background-color: $main-white;

            &-total-cost {
                @include flexRow( space-between, center );
                height: 20%;
                min-width: 300px;
                width: 100%;
                margin: 0px 15px 0px 15px;
                border: $main-border;
                border-radius: $main-border-radius;
                background-color: $main-white;

                &-text {
                    @include font( 16px, normal ); 
                    padding: 10px;
                    color: $main-color;
                }
            }

            &-buttons {
                @include flexCol( space-between, center );
                height: 70%;
                min-width: 300px;
                width: 100%;
                margin: 0px 15px 0px 15px;
                border: $main-border;
                border-radius: $main-border-radius;
                background-color: $main-white;

                &-pay {
                    @include flexRow( space-between, center );
                    height: 20%;
                    min-width: 300px;
                    width: 100%;
                    margin: 5px 15px 0px 15px;
                    // border: $main-border;
                    // border-radius: $main-border-radius;
                    background-color: $main-white;
                }
            }
        }
    }
}
</style>
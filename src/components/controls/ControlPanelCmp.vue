<template>
    <div class="service-control">
        <div class="flatdrop">
            <button-cmp :btnName="headerControlPanel.cpAddButtonName"
                @click-handler="clickHandler" />
        </div>
        <div class="flatdrop">
            <div class="backdrop">
            <input-cmp @input-handler="inputHandler"
                :placeholder="headerControlPanel.cpSearchPlaceholder" />
            </div>
            <div class="status backdrop">
                <select-cmp :selectName="headerControlPanel.cpOptionsData[ 0 ]" 
                    :selectFieldItem="headerControlPanel.cpOptionsData" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import ButtonCmp from '../ui/ButtonCmp.vue';
import InputCmp from '../ui/InputCmp.vue';
import SelectCmp from '../ui/SelectCmp.vue'
import { ststusFieldItem } from '@/assets/data/data'

    export default {
        props: {
            headerControlPanel: { type: Object, default: () => { return {} } }
        },

        components: {
            ButtonCmp,
            InputCmp,
            SelectCmp
        },
        
        emits: [ 'input-handler' ],

        setup( props: any, { emit }: any ) {

            const clickHandler = () => {
                console.log( 'Новый заказ' );
                
            }

            const inputHandler = ( data: string ): void => {
                emit( 'input-handler', data )
            }

            return {
                ststusFieldItem,
                clickHandler,
                inputHandler,
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.service-control {
    @include flexRow( space-between, center );
    height: auto;
    width: 98%;
    margin: 10px 0px 0px 0px;
    border: $main-border;
    border-radius: $main-border-radius;
    color: $main-color;
    background-color: $main-white;
    box-shadow: $main-shadow;
}

.status {
    max-height: 34px;
}
</style>
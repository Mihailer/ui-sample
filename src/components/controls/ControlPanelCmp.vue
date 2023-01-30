<template>
    <div class="service-control">
        <div class="backdrop">
            <input-cmp @input-handler="inputHandler" />
        </div>
        <div class="status backdrop">
            <select-cmp selectName="Все заказы" 
                :selectFieldItem="ststusFieldItem" />
        </div>
    </div>
</template>

<script lang="ts">
import InputCmp from '../ui/InputCmp.vue';
import SelectCmp from '../ui/SelectCmp.vue'
import { ststusFieldItem } from '@/assets/data/data'

    export default {

        components: {
            InputCmp,
            SelectCmp
        },
        
        emits: [ 'input-handler' ],

        setup( props: any, { emit }: any ) {

            const inputHandler = ( data: string ): void => {
                emit( 'input-handler', data )
            }

            return {
                inputHandler,
                ststusFieldItem
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
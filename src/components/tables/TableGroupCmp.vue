<template>
    <div class="table-group">
        <table-head-cmp :tableHeaderData="tableHeaderData"
            :showControls="showControls"
            :headerControlPanel="headerControlPanel"
            @items-width="itemsWidth"
            @input-handler="inputHandler"
            @click-handler="clickHandler"
            @emit-select-value="emitSelectValue" />
            
        <table-body-cmp :tableBodyData="tableData"
            :itemsWidth="bodyItemsWidth"
            @show-table-item="showTableItem" />
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import TableHeadCmp from './TableHeadCmp.vue';
import TableBodyCmp from './TableBodyCmp.vue';

    export default {
        components: {
            TableHeadCmp,
            TableBodyCmp
        },  

        props: {
            tableHeight: { type: String, default: '100%' },
            showControls: { type: Boolean, default: true },
            headerControlPanel: { type: Object, default: () => { return {} } },
            tableHeaderData: { type: Array, default: () => { return [] } },
            tableData: { type: Array, default: () => { return [] } }
        },
        
        setup( props: any, { emit }: any ) {

            emits: [ 'input-handler', 'click-handler', 'show-table-item', 'emit-select-value' ]

            const bodyItemsWidth = ref<number>( 0 )

            const itemsWidth = ( data: number ) => {
                bodyItemsWidth.value = data
            }

            const showTableItem = ( itemData: object ): void => {
                emit( 'show-table-item', itemData )
            }

            const clickHandler = (): void => {
                emit( 'click-handler' )
            }

            const inputHandler = ( data: string): void => {
                emit( 'input-handler', data )
            }

            const emitSelectValue = ( data: string ): void => {
                emit( 'emit-select-value', data  )
            }

            return {
                bodyItemsWidth,
                itemsWidth,
                showTableItem,
                clickHandler,
                inputHandler,
                emitSelectValue
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.table-group {
    @include flexCol( flex-start, center );
    height: calc( v-bind( tableHeight ) - 100px );
    width: 98%;
    margin: 0px 0px;
    border: $main-border;
    border-radius: $main-border-radius;
    color: $main-color;
    background-color: $main-white;
    box-shadow: $main-shadow;

    @media screen and ( max-width: 1440px ) {
        height: calc( v-bind( tableHeight ) - 80px );
    }
}
</style>
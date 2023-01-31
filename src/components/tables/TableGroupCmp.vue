<template>
    <div class="table-group">
        <table-head-cmp :tableHeaderData="tableHeaderData"
            :headerControlPanel="headerControlPanel"
            @items-width="itemsWidth"
            @input-handler="inputHandler" />
            
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
            headerControlPanel: { type: Object, default: () => { return {} } },
            tableHeaderData: { type: Array, default: () => { return [] } },
            tableData: { type: Array, default: () => { return [] } }
        },
        
        setup( props: any, { emit }: any ) {

            emits: [ 'input-handler', 'show-table-item' ]

            const bodyItemsWidth = ref<number>( 0 )
            const itemsWidth = ( data: number ) => {
                bodyItemsWidth.value = data
            }

            const showTableItem = ( itemData: object ): void => {
                emit( 'show-table-item', itemData )
            }

            const inputHandler = ( data: string): void => {
                emit( 'input-handler', data )
            }

            return {
                bodyItemsWidth,
                itemsWidth,
                showTableItem,
                inputHandler,
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.table-group {
    @include flexCol( flex-start, center );
    height: calc( 100vh - 100px );
    width: 98%;
    margin: 0px 0px;
    border: $main-border;
    border-radius: $main-border-radius;
    color: $main-color;
    background-color: $main-white;
    box-shadow: $main-shadow;
}
</style>
<template>
    <table-group-cmp tableHeight="100vh"
        :headerControlPanel="headerControlPanelWarehouse"
        :tableHeaderData="tableWarehouseHeaderData" 
        :tableData="tableWarehouseData"
            @input-handler="inputHandler"
            @show-table-item="showTableItem" />
</template>
  
<script lang="ts">
import TableGroupCmp from '/src/components/tables/TableGroupCmp.vue';

import 
    { 
        tableWarehouseData, 
        tableWarehouseHeaderData, 
        headerControlPanelWarehouse 
    } from '@/assets/data/data'

export default {

    components: {
        TableGroupCmp
    },

    setup() {

        const inputHandler = ( text: string ): void => {
            console.log( 'inputHandler : ' + `${ text }` );
        }

        const clickHandler = (): void => {
            console.log( 'clickHandler');
        }

        const showTableItem = ( data: object ): void  => {
            console.log( data );
        }

        return {
            tableWarehouseHeaderData,
            tableWarehouseData,
            headerControlPanelWarehouse,
            inputHandler,
            clickHandler,
            showTableItem,

        }
    }
}
</script>

<style lang="scss">
@import '~/src/assets/styles/custom.scss';

.content {
    @include flexCol( flex-start, center );
    height: 100%;
    width: 100%;
}

</style>
  
<template>
    <modal-wrapper-cmp v-if="addNewOrder" />
    <table-group-cmp 
        :headerControlPanel="headerControlPanelService"
        :tableHeaderData="tableHeaderData" 
        :tableData="tableData"
            @input-handler="inputHandler"
            @show-table-item="showTableItem"
            @click-handler="clickHandler"
            @emit-select-value="emitSelectValue" />
</template>
  
<script lang="ts">
import { ref } from 'vue'
import TableGroupCmp from '/src/components/tables/TableGroupCmp.vue';
import ModalWrapperCmp from '@/components/modals/ModalWrapperCmp.vue';
import
    { 
        tableData, 
        tableHeaderData, 
        headerControlPanelService 
    } from '@/assets/data/data'

export default {
    components: {
        TableGroupCmp,
        ModalWrapperCmp
    },

    setup() {

        const addNewOrder = ref( true )
   
        const inputHandler = ( text: string ): void => {
            console.log( 'inputHandler : ' + `${ text }` );
        }

        const clickHandler = (): void => {
            console.log( 'clickHandler');
        }

        const showTableItem = ( data: object ): void  => {
            console.log( data );
        }

        const emitSelectValue = ( data: string ): void => {
            console.log( data );
        }

        return {
            addNewOrder,
            tableHeaderData,
            tableData,
            headerControlPanelService,
            inputHandler,
            clickHandler,
            showTableItem,
            emitSelectValue
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
  
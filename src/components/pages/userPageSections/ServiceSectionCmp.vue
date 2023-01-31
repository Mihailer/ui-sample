<template>
    <table-group-cmp 
        :headerControlPanel="headerControlPanelService"
        :tableHeaderData="tableHeaderData" 
        :tableData="tableData"
            @input-handler="inputHandler"
            @show-table-item="showTableItem" />
</template>
  
<script lang="ts">
import TableGroupCmp from '/src/components/tables/TableGroupCmp.vue';
import { tableData, tableHeaderData } from '@/assets/data/data'

export default {
    components: {
        TableGroupCmp
    },

    setup() {
   
        const headerControlPanelService: object = {
            cpAddButtonName: 'Новый заказ',
            cpSearchPlaceholder: 'Найти заказ',
            cpOptionsData: [
                'Все заказы',
                'Новый',
                'Диагностика',
                'Ждет запчасть',
                'В работе',
                'Ждет клиента',
                'Оплачен',
                'Закрыт'
            ]
        }

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
            tableHeaderData,
            tableData,
            headerControlPanelService,
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
  
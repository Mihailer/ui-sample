<template>
    <div class="table-group">
        <table-head-cmp :tableHeaderData="tableHeaderData" />
        <table-body-cmp :tableBodyData="tableData"
            @show-table-item="showTableItem" />
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import TableHeadCmp from './TableHeadCmp.vue';
import TableBodyCmp from './TableBodyCmp.vue';

import { tableHeaderData } from '@/assets/data/data'


    export default {
        components: {
            TableHeadCmp,
            TableBodyCmp
        },  
        
        setup() {

            const showTableItem = ( itemData: object ) => {
                console.log( itemData );
                
            }

            const tableData = ref([
                { 
                    number: '1', 
                    name: 'Mihail', 
                    tel: '89785654343', 
                    reason: 'AKB', 
                    deviceType: 'Smart',
                    manufacturer: 'Xiaomi',
                    model: 'Redmi 9',
                    status: 'New'

                },
                { 
                    number: '2', 
                    name: 'Vlad', 
                    tel: '89785654343', 
                    reason: 'DM', 
                    deviceType: 'Smart',
                    manufacturer: 'Xiaomi',
                    model: 'Redmi Note 7',
                    status: 'New'

                }
            ])

            return {
                tableHeaderData,
                tableData,
                showTableItem
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.table-group {
    @include flexCol( flex-start, center );
    height: 96%;
    width: 98%;
    margin: 10px 0px;
    border: $main-border;
    border-radius: $main-border-radius;
    color: $main-color;
    background-color: $main-white;
    box-shadow: $main-shadow;
}
</style>
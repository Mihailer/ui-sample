<template>
    <div class="table-group">
        <table-head-cmp :tableHeaderData="tableHeaderData"
            @input-handler="inputHandler" />
        <table-body-cmp :tableBodyData="tableData"
            @show-table-item="showTableItem" />
    </div>
</template>

<script lang="ts">
import TableHeadCmp from './TableHeadCmp.vue';
import TableBodyCmp from './TableBodyCmp.vue';

    export default {
        components: {
            TableHeadCmp,
            TableBodyCmp
        },  

        props: {
            tableHeaderData: { type: Array, default: () => { return [] } },
            tableData: { type: Array, default: () => { return [] } }
        },
        
        setup( props, { emit }: any ) {

            emits: [ 'input-handler', 'show-table-item' ]

            const showTableItem = ( itemData: object ): void => {
                emit( 'show-table-item', itemData )
            }

            const inputHandler = ( data: string): void => {
                emit( 'input-handler', data )
            }

            return {
                showTableItem,
                inputHandler
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.table-group {
    @include flexCol( flex-start, center );
    height: auto;
    width: 98%;
    margin: 0px 0px;
    border: $main-border;
    border-radius: $main-border-radius;
    color: $main-color;
    background-color: $main-white;
    box-shadow: $main-shadow;
}
</style>
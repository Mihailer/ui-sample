<template>
    <div class="table-body-wrapper">
        <div class="table-body" 
            v-for="( bodyText, bodyTextIdx ) in actualTableData" 
            :key="bodyTextIdx"
            @click="showTableItem( bodyText )" >
            <span class="table-body-item"
                v-for="( textItem, textItemIdx ) in bodyText"
                :key="textItemIdx">
                {{ textItem }}
            </span>
        </div>
    </div>
</template>

<script lang="ts">
import { computed } from 'vue'
import SelectCmp from '../ui/SelectCmp.vue'

    export default {
        props: {
            itemsWidth: { type: Number, default: 0 },
            tableBodyData: { type: Array, default: () => { return [] } }
        },

        emits: [ 'show-table-item' ],

        setup( props: any, { emit }: any ) {
            const actualTableData = computed( () => props.tableBodyData )
            
            const showTableItem = ( item: object ): void => {
                emit( 'show-table-item', item )
            }

            return {
                actualTableData,
                showTableItem
            }
        },

        components: {
            SelectCmp,
        }
    }
</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.table-body-wrapper {
    @include flexCol( flex-start, center ); 
    overflow-y: scroll;
    height: calc( 100% - 100px );
    width: 100%;
}

.table-body {
    @include flexRow( space-between, center ); 
    height: 40px;
    width: 98%;
    margin: 5px 5px;
    color: $main-color;
    background-color: $main-white;

    &:hover {
        background-color: $main-hover;
        color: $main-white;
    }

    &-item {
        @include flexRow( flex-start, center );
        @include font( 12px, normal );
        height: 40px;
        width: calc( 100% / v-bind( itemsWidth ) - 12px );
        padding: 5px;
    }
}

::-webkit-scrollbar {
    width: 2px;
}

::-webkit-scrollbar-thumb {
    background-color: $main-color;
}
</style>
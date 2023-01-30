<template>
    <div class="table-body" 
        v-for="( bodyText, bodyTextIdx ) in tableBodyData" 
        :key="bodyTextIdx"
        @click="showTableItem( bodyText )" >
        <span class="table-body-item"
            v-for="( textItem, textItemIdx ) in bodyText"
            :key="textItemIdx">
            {{ textItem }}
        </span>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import SelectCmp from '../ui/SelectCmp.vue'



    export default {
        props: {
            tableBodyData: { type: Array, default: () => { return [] } }
        },

        emits: [ 'show-table-item' ],

        setup( props: any, { emit }: any ) {
            
            const itemWidth = ref<number>( props.tableBodyData.length ).value

            const showTableItem = ( item: any ): void => {
                emit( 'show-table-item', item )
            }

            return {
                itemWidth,
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
        height: 100%;
        width: calc( 100% / v-bind( itemWidth ) - 10px );
        padding: 5px;
    }
}
</style>
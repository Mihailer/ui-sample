<template>
    <div class="table-head">
        <span class="table-head-item" 
            v-for="( headText, headTextIdx ) in tableHeaderData" 
            :key="headTextIdx">
            {{ headText }}
        </span>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'
    export default {
        props: {
            tableHeaderData: { type: Array, default: () => { return [] } }
        },

        setup( props: any ) {
            const itemWidth = ref( props.tableHeaderData.length ).value

            return {
                itemWidth
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.table-head {
    @include flexRow( space-between, center ); 
    height: 40px;
    width: 98%;
    margin: 5px 5px;
    border-bottom: $main-border;
    color: $main-color;
    background-color: $main-white;

    &-item {
        @include flexRow( flex-start, center );
        @include font( 12px, normal );
        height: 100%;
        width: calc( 100% / v-bind( itemWidth ) - 5px );
        padding: 3px;
    }
}
</style>
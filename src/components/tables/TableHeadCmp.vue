<template>
    <div class="table-head-controls">
        <control-panel-cmp v-if="showControls"
            :headerControlPanel="headerControlPanel" 
            @input-handler="inputHandler"
            @click-handler="clickHandler"
            @emit-select-value="emitSelectValue" />
    </div>
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
import ControlPanelCmp from '../controls/ControlPanelCmp.vue'
    export default {
        props: {
            showControls: { type: Boolean, default: true },
            headerControlPanel: { type: Object, default: () => { return {} } },
            tableHeaderData: { type: Array, default: () => { return [] } }
        },

        emits: [ 'input-handler', 'click-handler', 'items-width', 'emit-select-value' ],

        setup( props: any, { emit }: any ) {
            
            const itemWidth = ref<number>( props.tableHeaderData.length ).value
                emit( 'items-width', itemWidth )

            const inputHandler = ( data: string ): void => {
                emit( 'input-handler', data )
            }

            const clickHandler = () => {
                emit( 'click-handler' )
            }

            const emitSelectValue = ( data: string ): void => {
                emit( 'emit-select-value', data )
            }

            return {
                itemWidth,
                inputHandler,
                clickHandler,
                emitSelectValue
            }
        },

        components: {
            ControlPanelCmp
        }
    }
</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.table-head-controls {
    @include flexRow( center, center ); 
    width: 100%;
}

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
        width: calc( 100% / v-bind( itemWidth ) - 10px );
        padding: 5px;
    }
}
</style>
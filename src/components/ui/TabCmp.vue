<template>
    <button class="tab-cmp" 
        type="button" 
        @click="setActiveTab( name )">
        {{ name }}
    </button>
</template>

<script lang="ts">
    export default {
        props: {
            name: { type: String, default: 'Tab' }
        },

        emits:[ 'click-tab-handler' ],

        setup( props: object, { emit }: any ) {

            const setActiveTab = ( data: string ): void => {
                emit( 'click-tab-handler', data )
            }

            return {
                setActiveTab
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.tab-cmp {  
    height: 34px;
    padding: 0px 5px;
    margin: 0px 4px;
    color: $main-color;
    border: none;
    border-radius: $main-border-radius;
    border: $main-border;
    outline: none;
    box-shadow: $main-shadow;
    
    &:hover {
        background-color: $main-hover;
        color: $main-white;
    }

}
</style>
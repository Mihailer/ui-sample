<template>
    <div class="header-cmp">
        <div class="header-cmp-left">
            <div class="backdrop">
                <nav-cmp :tabs="tabsData" 
                @click-tab="clickTab"
                @click-handler-tab="setActiveTab" />
            </div>
        </div>
        <div class="header-cmp-right">
            <div class="backdrop ">
                <text-field-cmp textData="mihail.pisarev.js@gmail.com" />
                <button-cmp btnName="Выйти"
                    :loading="false"
                    @click-handler="clickHandler" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { tabs } from '@/assets/data/data'
import NavCmp from '../controls/NavCmp.vue'
import ButtonCmp from '../ui/ButtonCmp.vue'
import TextFieldCmp from '../ui/TextFieldCmp.vue'

    export default {

        components: {
            NavCmp,
            ButtonCmp,
            TextFieldCmp
        },

        setup( props: any, { emit }: any ) {

            emits: [ 'click-tab' ]

            const tabsData = ref( tabs )

            const clickTab = ( data: string | number ): void => {
                emit( 'click-tab', data )
            }

            const setActiveTab = ( data: number ) => {
                console.log( data );
            }

            const inputHandler = ( text: string ): void => {
                console.log( 'inputHandler : ' + `${ text }` );
            }

            const clickHandler = (): void => {
                console.log( 'clickHandler');
            }

            return {
                tabsData,
                clickTab,
                setActiveTab,
                inputHandler,
                clickHandler
            }
        }
        
    }
</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.header-cmp {
    @include flexRow( flex-start, center );
    width: 98%;
    margin: 10px 0px;
    border: $main-border;
    border-radius: $main-border-radius;
    color: $main-color;
    background-color: $main-flatdrop;
    box-shadow: $main-shadow;

    &-left {
        @include flexRow( space-between, center );
        width: 50%;
    }

    &-right {
        @include flexRow( flex-end, center );
        width: 50%;
    }
}
</style>
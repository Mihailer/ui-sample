<template>
    <div class="nav-cmp">
        <tab-cmp v-for="( tab, tabIndex ) in tabs" 
            :class="active === tabIndex ? 'active-tab' : '' "
            :key="tabIndex" 
            :name="tab" 
            :id="tabIndex"
                @click="active = tabIndex"
                @click-tab-handler="clickTabHandler( tab, tabIndex )" />
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import TabCmp from '../ui/TabCmp.vue';

    export default {
        props: {
            tabs: { type: Object, default: () => { return {} } }
        },

        components: {
            TabCmp
        },

        emits: [ 'click-tab' ],

        setup( props: any, { emit }: any ) {
            const active = ref<string>( '1' )

            const clickTabHandler = ( data: string, dataIndex: string | number ): void => {
                emit( 'click-tab', dataIndex )
            }

            return {
                active,
                clickTabHandler
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.nav-cmp {
    @include flexRow( space-between, center );
    height: 100%;
    width: auto;

    @media screen and ( max-width: 540px ) {
        @include flexRow( flex-start, center );
        width: 100%;
    }
}
</style>
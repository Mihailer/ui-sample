<template>
    <div class="nav-cmp">
        <tab-cmp v-for="( tab, tabIndex ) in tabs" 
            :class="active === tabIndex ? 'active-tab' : '' "
            :key="tabIndex" 
            :name="tab" 
            :id="tabIndex"
                @click="active = tabIndex"
                @click-handler="$emit( 'set-active-tab', tabIndex )" />
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

        setup() {
            const active = ref( '1' )

            return {
                active
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.nav-cmp {
    @include flexRow( flex-start, center );
    height: 100%;
    width: 300px;
    margin: 0px 5px;

    @media screen and ( max-width: 540px ) {
        @include flexRow( flex-start, center );
        width: 100%;
    }
}
</style>
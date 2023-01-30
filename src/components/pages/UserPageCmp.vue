<template>
    <header-cmp />
    <div class="content">
        <service-section-cmp />
    </div>
</template>
  
<script lang="ts">
import { ref } from 'vue'
import HeaderCmp from '../header/HeaderCmp.vue'
import ServiceSectionCmp from '../pages/userPageSections/ServiceSectionCmp.vue'



import { tabs, selectFieldItem } from '@/assets/data/data'

    export default {
        components: {
            HeaderCmp,
            ServiceSectionCmp
        },

    setup() {
        const inputHandler = ( text: string ): void => {
            console.log( 'inputHandler : ' + `${ text }` );
        }

        const clickHandler = (): void => {
            console.log( 'clickHandler');
        }

        const tabsData = ref( tabs )

        const setActiveTab = ( data: number ) => {
            console.log( data );
        }

        return {
            inputHandler,
            clickHandler,
            selectFieldItem,
            tabsData,
            setActiveTab
        }
    }
}
</script>

<style lang="scss">
@import '~/src/assets/styles/custom.scss';

.content {
  @include flexCol( flex-start, center );
  height: 100%;
  width: 100%;
}

</style>
  
<template>
    <header-cmp
        @click-tab=clickTab />
    <div class="content">
        <service-section-cmp 
            v-if="currentTab == 1" />
        <warehouse-section-cmp 
            v-if="currentTab == 2" />
    </div>
</template>
  
<script lang="ts">
import { ref } from 'vue'
import HeaderCmp from '../header/HeaderCmp.vue'
import ServiceSectionCmp from '../pages/userPageSections/ServiceSectionCmp.vue'
import WarehouseSectionCmp from './userPageSections/WarehouseSectionCmp.vue'

import { tabs, selectFieldItem } from '@/assets/data/data'

    export default {
        components: {
            HeaderCmp,
            ServiceSectionCmp,
            WarehouseSectionCmp
        },

    setup() {

        const currentTab = ref<string | number>( 1 )
        const clickTab = ( data: string | number): void => {
            currentTab.value = data
        }

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
            currentTab,
            clickTab,
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
  
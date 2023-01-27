<template>
  <div style=" display: flex; 
    justify-content: space-between; 
    align-items: flex-start; 
    max-height: 70px; 
    width: auto;">

    <div style=" display: flex; 
      justify-content: space-between; 
      align-items: flex-start; 
      height: auto;
      width: auto;" >

      <div class="backdrop">
        <nav-cmp :tabs="tabsData" @click-handler-tab="setActiveTab" />
      </div>

    </div>

      <div class="backdrop ">
        <input-cmp 
          @input-handler="inputHandler" />
        <button-cmp btnName="Кнопка"
          :loading="false"
          @click-handler="clickHandler" />
      </div>

      <div class="backdrop" >
        <select-cmp selectName="Выбрать вариант" 
        :selectFieldItem="selectFieldItem" />
      </div>
      <div class="backdrop" >
        <select-cmp selectName="Выбрать вариант" 
        :selectFieldItem="selectFieldItem" />
      </div>
      <div class="backdrop" >
        <select-cmp selectName="Выбрать вариант" 
        :selectFieldItem="selectFieldItem" />
      </div>
  </div>

  <div class="content">
    <table-group-cmp />
  </div>

  
</template>

<script lang="ts">
import { ref } from 'vue'
import SelectCmp from './components/ui/SelectCmp.vue';
import InputCmp from './components/ui/InputCmp.vue';
import ButtonCmp from './components/ui/ButtonCmp.vue';
import NavCmp from './components/controls/NavCmp.vue';

import { tabs, selectFieldItem } from './assets/data/data'

import TableGroupCmp from './components/tables/TableGroupCmp.vue';

  export default {
    components: {
      SelectCmp,
      ButtonCmp,
      InputCmp,
      NavCmp,
      TableGroupCmp
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

body {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}

#app {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.content {
  @include flexCol( flex-start, center );
  height: 100%;
  width: 100%;
}

</style>

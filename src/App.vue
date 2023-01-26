<template>
  <div style="display: flex; 
    justify-content: space-between; 
    align-items: flex-start; 
    height: 100px; 
    width: auto;">

    <div style="display: flex; 
      justify-content: space-between; 
      align-items: flex-start; 
      width: auto;" >

      <div class="backdrop">
        <nav-cmp :tabs="{ 
          '1': 'Сервис',
          '2': 'Склад',
          '3': 'Аналитика'
        }" />
      </div>

    </div>

      <div class="backdrop ">
        <input-cmp 
          @input-handler="inputHandler" />
        <button-cmp btnName="Кнопка"
          :loading="false"
          @click-handler="clickHandler" />
      </div>

        
        <div class="backdrop">
          <select-cmp selectName="Выбрать вариант" 
          :selectFieldItem="selectFieldItem" />
        </div>
  </div>

  
</template>

<script lang="ts">
import { ref } from 'vue'
import SelectCmp from './components/ui/SelectCmp.vue';
import InputCmp from './components/ui/InputCmp.vue';
import ButtonCmp from './components/ui/ButtonCmp.vue';
import NavCmp from './components/controls/NavCmp.vue';

  export default {
    components: {
      SelectCmp,
      ButtonCmp,
      InputCmp,
      NavCmp
    },

    setup() {
      const inputHandler = ( text: string ): void => {
        console.log( 'inputHandler : ' + `${ text }` );
      }

      const clickHandler = (): void => {
        console.log( 'clickHandler');
      }

      const selectFieldItem = ref([
        'Вариант 1',
        'Вариант 2',
        'Вариант 3',
        'Вариант 4'
      ])

      return {
        inputHandler,
        clickHandler,
        selectFieldItem
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
  justify-content: center;
  align-items: center;
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // color: #2c3e50;
  // margin-top: 60px;
}
</style>

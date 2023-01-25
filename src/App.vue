<template>
  <div style="display: flex; 
    justify-content: space-between; 
    align-items: center; 
    height: 100px; 
    width: auto;">
      <input-cmp dropMargin="drop"
        @input-handler="inputHandler" />
      <button-cmp btnName="Кнопка"
        :loading="false"
        @click-handler="clickHandler" />
  </div>
</template>

<script lang="ts">
import InputCmp from './components/ui/InputCmp.vue';
import ButtonCmp from './components/ui/ButtonCmp.vue';

  export default {
    components: {
      ButtonCmp,
      InputCmp
    },

    setup() {
      const inputHandler = ( text: string ): void => {
        console.log( 'inputHandler : ' + `${ text }` );
      }

      const clickHandler = (): void => {
        console.log( 'clickHandler');
      }

      return {
        inputHandler,
        clickHandler
      }
    }
  }
</script>

<style lang="scss">
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
  justify-content: center;
  align-items: center;
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // color: #2c3e50;
  // margin-top: 60px;
}
</style>

<template>
  <div>
    <button-cmp btnName="Найти заказ"
      :loading="false"
      @click-handler="clickHandler" />
  </div>
</template>

<script lang="ts">
import ButtonCmp from './components/ui/ButtonCmp.vue';

  export default {
    components: {
      ButtonCmp
    },

    setup() {
      const clickHandler = (): void => {
        console.log( 'clickHandler');
      }

      return {
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

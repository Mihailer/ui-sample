<template>
  <user-page-cmp />
</template>

<script lang="ts">
import UserPageCmp from './components/pages/UserPageCmp.vue';

  export default {
    components: {
      UserPageCmp
    },

    setup() {

      return {

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

</style>

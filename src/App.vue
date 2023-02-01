<template>
  <user-page-cmp v-if="authState" />
  <auth-page-cmp v-if="!authState" />
</template>

<script lang="ts">
import { ref } from 'vue'
import AuthPageCmp from './components/pages/AuthPageCmp.vue';
import UserPageCmp from './components/pages/UserPageCmp.vue';

  export default {
    components: {
      UserPageCmp,
      AuthPageCmp
    },

    setup() {

      const authState = ref( true )

      return {
        authState
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

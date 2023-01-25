<template>
    <div class="spring-spinner">
        <div class="spring-spinner-part top">
            <div class="spring-spinner-rotator"></div>
        </div>
        <div class="spring-spinner-part bottom">
            <div class="spring-spinner-rotator"></div>
        </div>
    </div>
</template>

<script lang="ts">
    export default {}
</script>

<style lang="scss" scoped>
@import 'src/assets/styles/custom.scss';
.spring-spinner, .spring-spinner * {
      box-sizing: border-box;
    }

    .spring-spinner {
      height: 20px;
      width: 20px;
    }

    .spring-spinner .spring-spinner-part {
      overflow: hidden;
      height: calc(20px / 2);
      width: 20px;
    }

    .spring-spinner  .spring-spinner-part.bottom {
       transform: rotate(180deg) scale(-1, 1);
     }

    .spring-spinner .spring-spinner-rotator {
      width: 20px;
      height: 20px;
      border: calc(20px / 7) solid transparent;
      border-right-color: $main-color;
      border-top-color: $main-color;
      border-radius: 50%;
      box-sizing: border-box;
      animation: spring-spinner-animation 3s ease-in-out infinite;
      transform: rotate(-200deg);
    }

    @keyframes spring-spinner-animation {
      0% {
        border-width: calc(20px / 7);
      }
      25% {
        border-width: calc(20px / 7);
      }
      50% {
        transform: rotate(115deg);
        border-width: calc(20px / 7);
      }
      75% {
        border-width: calc(20px / 7);
      }
      100% {
        border-width: calc(20px / 7);
      }
    }
</style>
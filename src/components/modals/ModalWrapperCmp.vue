<template>
    <div class="modal-wrapper">
        <new-order-modal-cmp />
    </div>
</template>

<script lang="ts">
import NewOrderModalCmp from '../modals/NewOrderModalCmp.vue'

    export default {

        components: {
            NewOrderModalCmp
        },
        
        setup() {

            return {

            }
        }
    }
</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.modal-wrapper {
    @include flexRow( center, center );
    position: absolute;
    z-index: 30;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    background-color: $main-wrapper;
}
</style>
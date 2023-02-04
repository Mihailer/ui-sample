<template>
    <button :class="[ loading ? 'load-class' : 'button-cmp' ]" 
        type="button"
        @click="load" >
        {{ btnNameText }}
        <spinner-cmp v-if="loading" />
    </button>
</template>

<script lang="ts">
import { ref } from 'vue'
import  SpinnerCmp  from './SpinnerCmp.vue'

export default {
    props: {
        loading: { type: Boolean, default: false },
        btnName: { type: String, default: 'Btn' }
    },

    emits: [ 'click-handler' ],

    components: {
        SpinnerCmp
    },

    setup( props: any, { emit }: any ) {
        const btnNameText = ref( props.btnName )
        const buttonSize = ref( props.btnName.split('').length )
        const loading = ref( props.loading )
        
        const load = (): void => {
            emit( 'click-handler' )
            // btnNameText.value = ''
            // loading.value = true  

        }

        return {
            loading,
            btnNameText,
            buttonSize,
            load,
        }
    }
}

</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.button-cmp {
    @include flexRow( center, center );
    @include font( 13px, normal );
    height: 34px;
    margin: 0px 4px;
    width: calc( 10px * v-bind( buttonSize ) );
    border: $main-border;
    border-radius: $main-border-radius;
    outline: none;
    color: $main-color;
    box-shadow: $main-shadow;

    &:hover {
        background-color: $main-hover;
        color: $main-white;
    }
}

.load-class {
    @include btn( v-bind( buttonSize ) )
}
</style>
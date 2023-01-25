<template>
    <input :class="[ 
        dropMargin === 'drop' 
            ? 'drop-margin' 
            : 'input-cmp' ]" 
        v-model="fieldValue"
        placeholder="Введите текст"
        @change="emitFieldText" />
</template>

<script lang="ts"> 
import { ref } from 'vue'
    export default {
        props: {
            dropMargin: { type: String, default: '' }
        },

        emits: [ 'input-handler' ],

        setup( props: any, { emit }: any ) {

            const fieldValue = ref( '' )
            const emitFieldText = () => {
                emit( 'input-handler', fieldValue.value )
            }

            return {
                emitFieldText,
                fieldValue
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.input-cmp {
    @include font( 13px, normal );
    height: 30px;
    padding: 0px 10px;
    margin: 0px 10px;
    border: $main-border;
    border-radius: $main-border-radius;
    outline: none;
    color: $main-color;
    box-shadow: $main-shadow;

    &::placeholder {
            color: $main-color;
        }

    &:hover {
        background-color: $main-hover;
        color: white;

        &::placeholder {
            color: white;
        } 
    }

    &:focus {
        background-color: $main-hover;
        color: $main-color;
        background-color: white;
    }
}
</style>
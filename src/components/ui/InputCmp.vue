<template>
    <input :class="[ 
        dropMargin === 'drop' 
            ? 'drop-margin' 
            : 'input-cmp' ]" 
        v-model="fieldValue"
        :type=inputType
        :placeholder="placeholder"
        @change="emitFieldText" />
        
</template>

<script lang="ts"> 

import { ref } from 'vue'
    export default {
        props: {
            inputType: { type: String, default: 'text' },
            placeholder: { type: String, default: 'Введите текст' },
            dropMargin: { type: String, default: '' }
        },

        emits: [ 'input-handler' ],

        setup( props: any, { emit }: any ) {

            const fieldValue = ref( '' )
            const emitFieldText = () => {
                emit( 'input-handler', fieldValue.value )
            }

            return {
                fieldValue,
                emitFieldText
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.input-cmp {
    @include font( 13px, normal );
    min-height: 30px;
    width: 98%;
    padding: 0px 10px;
    margin: 0px 4px;
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
<template>
    <span class="text-field-cmp">
        {{ textData }}
    </span>
</template>

<script lang="ts"> 
    export default {
        props: {
            textData: { type: String, default: 'Текстовое поле'}
        },

        setup() {

            return {
    
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.text-field-cmp {
    @include flexRow( flex-start, center );
    @include font( 13px, normal );
    height: 30px;
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
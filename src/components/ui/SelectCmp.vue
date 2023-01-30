<template>
    <div class="select-wrapper">
        <div class="select-cmp"
            @click="selectedField" >
            <span>{{ currentSelectName }}</span>
        </div>
        <div class="select-cmp-options" v-if="selectField">
            <span class="select-cmp-options-field"
                v-for="( field, fieldIndex ) in selectFieldItem" 
                    :key="fieldIndex"
                    @click="selectFieldElem( field as string )"> 
                    {{ field }} 
            </span>
        </div>
    </div>
</template>

<script lang="ts"> 
import { ref, computed, PropType } from 'vue'

    export default {
        props: {
            selectName: { type: String, default: '' },
            selectFieldItem: { type: Array, default: () => { return [] } }
        },

        setup( props: any ) {
            
            const selectSize = computed(() => props.selectName.split('').length )
            const selectField = ref<boolean>( false )
            const currentSelectName = ref<string>( props.selectName )

            const selectedField = (): void => {
                selectField.value = !selectField.value
            }

            const selectFieldElem = ( fieldName: string ): void => {
                currentSelectName.value = fieldName
                console.log( currentSelectName.value );
                selectedField()
            }

            return {
                selectField,
                selectedField,
                selectSize,
                selectFieldElem,
                currentSelectName
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.select-wrapper {
    @include flexCol( flex-start, flex-start )
}

.select-cmp {
    @include flexRow( flex-start, center );
    @include font( 13px, normal );
    height: 30px;
    min-width: 100px;
    width: calc( 10px * v-bind( selectSize ));
    padding: 0px 10px;
    margin: 0px 4px;
    border: $main-border;
    border-radius: $main-border-radius;
    outline: none;
    color: $main-color;
    background-color: $main-white;
    box-shadow: $main-shadow;

    &:hover {
        background-color: $main-hover;
        color: $main-white;

        &::placeholder {
            color: $main-white;
        } 
    }

    &-options {
        z-index: 20;
        @include flexCol( flex-start, flex-start );
        @include font( 13px, normal );
        height: auto;
        min-width: 120px;
        width: calc( 10px * v-bind( selectSize ) + 20px );
        margin: 2px 4px;
        border: $main-border;
        border-radius: $main-border-radius;
        outline: none;
        color: $main-color;
        background-color: $main-white;
        box-shadow: $main-shadow;

        &-field {
            @include flexRow( flex-start, center );
            @include font( 13px, normal );
            height: 30px;
            width: calc( 100% - 20px );
            padding: 0px 10px;
            margin: 0px 0px;
            outline: none;
            color: $main-color;


            &:hover {
                background-color: $main-hover;
                color: $main-white;
            }
        }
    }
}
</style>
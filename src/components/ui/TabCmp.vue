<template>
    <button class="tab-cmp" 
        type="button" 
        @click="$emit( 'click-handler' )">
        {{ name }}
    </button>
</template>

<script>
    export default {
        props: {
            name: { type: String, default: 'Tab' }
        }
    }
</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.tab-cmp {  
    height: 34px;
    padding: 0px 5px;
    margin: 0px 5px;
    background-color: transparent;
    color: $main-color;
    border: none;
    border-radius: $main-border-radius;
    border: $main-border;
    outline: none;
    box-shadow: $main-shadow;
}
</style>
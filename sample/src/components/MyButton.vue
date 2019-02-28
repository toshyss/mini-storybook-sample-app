<template>
   <button type="button" :name="name" 
        @click="onClick"><slot/></button>
</template>
<script>
   export default {
       name: "MyButton",
       props: { name: String, },
       methods: {
           onClick(e) {
               this.$emit("event-click", e)
            },
        },
    }
</script>
<style scoped>
    button {
        color: purple;
        border-radius: 15px;
        font-size: 50px;
        line-height: 1.5;
        padding: 0 10px;
    }
</style>
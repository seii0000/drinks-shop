<template>
    <div class="product-card">
        <h2>{{ product.name }}</h2>
        <p>{{ product.price }}</p>
        <button @click="add">Add</button>
        <button @click="remove" :disabled="!cart[product.id]">Remove</button>
    </div>
</template>

<script>
export default {
    props: ['product'],
    created(){
        console.log(this.product);
    },
    methods: {
        add() {
            this.$emit('add', this.product);
        },
        remove() {
            this.$emit('remove', this.product);
        }
    }
}
</script>


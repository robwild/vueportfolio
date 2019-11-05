<template>
    <div class="brands" v-if="ready">

        <div class="container">
            <b-img-lazy
                    v-for="brand in brands"
                    v-bind:key="brand.id"
                    v-bind:src="brand.field_logo"
                    v-bind:alt="brand.title">
            </b-img-lazy>
        </div>



    </div>
</template>

<script>
    import axios from 'axios';

    var contentapi = "https://portfolio.8manj.co.uk/drupal/api/brands";

    export default {
        name: 'Brands',

        data() {
            return {
                brands: null
            }
        },
        created() {
            this.getBrands();
        },
        methods: {
            getBrands() {
                axios.get(contentapi + '?_format=json')
                    .then(response => {
                        this.brands = response.data;
                    });
            }
        },
        computed: {
            ready() {
                return this.brands !== null;
            }
        }
    };
</script>

<style scoped>

</style>
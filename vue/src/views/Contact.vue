<template>
    <div class="contact" v-if="ready">

        <vue-headful
                v-bind:title="page[0].field_page_title"
                v-bind:description="page[0].field_page_description"
                v-bind:keywords="page[0].field_page_keywords"
        />
        <h1 class="sr-only">{{ page[0].field_page_title }}</h1>

        <b-card no-body class="overflow-hidden" style="max-width: 100vw;">
            <b-row no-gutters>
                <b-col md="6">
                    <b-card-body
                            v-bind:title="page[0].field_content_title"
                            v-bind:sub-title="page[0].field_content_sub_title" >
                        <b-card-text>
                            <div class="slideInLeft" v-html="page[0].body"/>
                        </b-card-text>

                        <Social />
                    </b-card-body>
                </b-col>
                <b-col md="6">
                    <b-card-img v-bind:src="page[0].field_portrait_image" class="rounded-0" v-bind:alt="page[0].field_portrait_image_1"></b-card-img>
                </b-col>
            </b-row>
        </b-card>

    </div>
</template>

<script>

    import Social from "../components/Social";
    import axios from 'axios';

    var contentapi = "https://portfolio.8manj.co.uk/drupal/api/page/3";

    export default {
        name: 'contact',
        components: {
            Social
        },
        data() {
            return {
                page: null
            }
        },
        created() {
            this.getPage();
        },
        methods: {
            getPage() {
                axios.get(contentapi + '?_format=json')
                    .then(response => {
                        this.page = response.data;
                    });
            }
        },
        computed: {
            ready() {
                return this.page !== null;
            }
        }
    };

</script>

<style scoped>

</style>
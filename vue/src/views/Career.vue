<template>

    <div>

        <div v-if="!ready">
            <Loading />
        </div>

    <div class="career" v-if="ready">

        <vue-headful
                title="Career history - Rob Wild | 8Manj Technologies Ltd online portfolio and CV"
                description="Career History"
                keywords=""
        />

        <h1 class="sr-only">Career page</h1>

        <section id="timeline">

            <div class="tl-item" v-for="job in career" v-bind:key="job.id" v-bind:style="{ width: 100/career.length + '%' }">

                <div class="tl-bg" v-bind:style="'background-image: url(' + job.field_background_image +')'"></div>

                <div class="tl-year" v-html="job.nothing_1"></div>

                <div class="tl-content" v-bind:v-html="job.field_job_ + job.field_company + job.nothing + job.body">
                    <h2 class="role" v-html=" job.field_job_ "></h2>
                    <div v-html=" job.field_company "></div>
                    <div v-html=" job.nothing "></div>
                    <div class="tl-body" v-html="job.body"></div>
                </div>
            </div>

        </section>

    </div>

    </div>
</template>

<script>

    import axios from 'axios';
    import Loading from "../components/Loading";
    var contentapi = "https://portfolio.8manj.co.uk/drupal/api/careers";

    export default {
        name: 'Career',
        components: {
            Loading
        },
        data() {
            return {
                career: null
            }
        },
        created() {
            this.getCareer();
        },
        methods: {
            getCareer() {
                axios.get(contentapi + '?_format=json')
                    .then(response => {
                        this.career = response.data;
                    });
            }
        },
        computed: {
            ready() {
                return this.career !== null;
            }
        }
    }
</script>

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

            <b-carousel
                    id="carousel-no-animation"
                    style=""
                    fade
                    indicators
                    controls
                    img-width="4096"
                    img-height="2304"
                    :interval="0"
            >
                <b-carousel-slide
                        v-for="job in career"
                        v-bind:key="job.id"
                        v-bind:caption="job.field_job_"
                        v-bind:img-src="job.field_background_image"
                        v-bind:text-html="job.field_company + job.nothing + job.body"
                        text-tag="div"
                ></b-carousel-slide>

            </b-carousel>
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
    };
</script>

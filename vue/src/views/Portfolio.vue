<template>
    <div class="portfolio" v-if="ready">

        <vue-headful
                title="Portfolio - Rob Wild | 8Manj Technologies Ltd online portfolio & CV"
                description="Description from vue-headful"
                keywords="some keywords here"
        />

        <div class="container">
            <b-card-group columns>
                <b-card
                        v-for="casestudy in portfolio"
                        v-bind:key="casestudy.nid"
                        v-bind:title="casestudy.field_summary_title"
                        v-bind:img-src="casestudy.field_summary_image"
                        v-bind:img-alt="casestudy.field_summary_title"
                        img-top>
                    <div class="skills">
                    <div v-for="(skill, index) in (casestudy.field_skills.split(','))" :key="index" :skill="skill">
                        <b-badge variant="primary">{{ skill }}</b-badge>
                    </div>
                    </div>

                    <b-card-text v-html="casestudy.field_summary" />
                    <b-button v-b-modal="modalId(casestudy.nid)">More on: {{ casestudy.field_summary_title}}</b-button>
                    <b-modal
                            :id="'modal' + casestudy.nid"
                             class="modal-fullscreen"
                             scrollable
                             centered
                             v-bind:title="casestudy.field_content_title"
                    >
                        <b-container fluid class="p-4 bg-dark">
                            <b-row>
                                <b-col v-for="(image, index) in (casestudy.field_sample_image.split(','))" :key="index" :image="image">
                                    <b-img-lazy thumbnail center v-bind:src=" image"></b-img-lazy>
                                </b-col>
                            </b-row>
                        </b-container>
                        <div class="date">{{ casestudy.field_date }}</div>
                        <div class="my-4 remit" v-html="casestudy.body" />
<!--                        <b-link href="{{ casestudy.field_sample_link}}" target="_blank">{{ casestudy.field_sample_link}}</b-link>-->
                    </b-modal>

                </b-card>
            </b-card-group>

        </div>

    </div>
</template>

<script>
    import axios from 'axios';

    var contentapi = "https://portfolio.8manj.co.uk/drupal/api/portfolio";

    export default {
        name: 'Portfolio',

        data() {
            return {
                portfolio: null
            }
        },
        created() {
            this.getPortfolio();
        },
        methods: {
            getPortfolio() {
                axios.get(contentapi + '?_format=json')
                    .then(response => {
                        this.portfolio = response.data;
                    });
            },
            modalId(casestudy) {
                return 'modal' + casestudy;
            }
        },
        computed: {
            ready() {
                return this.portfolio !== null;
            }
        }
    };
</script>

<style>
    .modal-dialog {
        max-width: 90vw;
    }
    .modal-footer {
        display: none;
    }
</style>

<template>
    <div class="portfolio container" v-if="ready">

        <vue-headful
                title="Portfolio - Rob Wild | 8Manj Technologies Ltd online portfolio & CV"
                description="Description from vue-headful"
                keywords="some keywords here"
        />

        <div>
            <b-card-group columns>
                <b-card
                        v-for="casestudy in portfolio"
                        v-bind:key="casestudy.nid"
                        v-bind:title="casestudy.field_summary_title"
                        v-bind:img-src="casestudy.field_summary_image"
                        v-bind:img-alt="casestudy.field_summary_title"
                        img-top>
                    <b-badge variant="primary">{{ casestudy.field_skills }}</b-badge><br >
                    <b-card-text>{{ casestudy.field_summary }}</b-card-text>
                    <b-button v-b-modal="modalId(casestudy.nid)">More on: {{ casestudy.field_summary_title}}</b-button>
                    <b-modal
                            :id="'modal' + casestudy.nid"
                             class="modal-fullscreen"
                             scrollable
                             centered
                             v-bind:title="casestudy.field_content_title"
                    >
                        <b-container fluid class="p-4 bg-light">
                            <b-row>
                                <b-col>
                                    <b-img-lazy thumbnail center src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img-lazy>
                                </b-col>
                                <b-col>
                                    <b-img-lazy thumbnail center src="https://picsum.photos/250/250/?image=58" alt="Image 2"></b-img-lazy>
                                </b-col>
                                <b-col>
                                    <b-img-lazy thumbnail center src="https://picsum.photos/250/250/?image=59" alt="Image 3"></b-img-lazy>
                                </b-col>
                            </b-row>
                        </b-container>
                        <p class="my-4">Vertically centered modal!</p>
                        <b-link href="#foo" target="_blank">Link</b-link>
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

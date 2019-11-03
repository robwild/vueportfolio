<template>
    <div class="portfolio container">

        <vue-headful
                title="Portfolio - Rob Wild | 8Manj Technologies Ltd online portfolio & CV"
                description="Description from vue-headful"
                keywords="some keywords here"
        />
        <h1>This is the portfolio page</h1>

        <div>
            <b-card-group deck>
                <b-card title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
                    <b-badge variant="primary">Primary</b-badge><br >
                    <b-card-text>
                        This is a wider card with supporting text below as a natural lead-in to additional content.
                        This content is a little bit longer.
                    </b-card-text>
                    <b-button v-b-modal.modal-center>Launch centered modal</b-button>
                    <b-modal id="modal-center"
                             class="modal-fullscreen"
                             scrollable
                             centered
                             title="BootstrapVue"
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

                <b-card title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-topy>
                    <b-card-text>
                        This card has supporting text below as a natural lead-in to additional content.
                    </b-card-text>
                    <b-button v-b-modal.modal-center2>Launch centered modal</b-button>
                    <b-modal id="modal-center2"
                             class="modal-fullscreen"
                             scrollable
                             centered
                             title="BootstrapVue 2"
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
                        <p class="my-4">Vertically centered modal 2!</p>
                        <b-link href="#foo" target="_blank">Link</b-link>
                    </b-modal>

                </b-card>

                <b-card title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
                    <b-card-text>
                        This is a wider card with supporting text below as a natural lead-in to additional content.
                        This card has even longer content than the first to show that equal height action.
                    </b-card-text>
                </b-card>


            </b-card-group>

        </div>

    </div>
</template>

<style>
    .modal-dialog {
        max-width: 90vw;
    }
    .modal-footer {
        display: none;
    }
</style>

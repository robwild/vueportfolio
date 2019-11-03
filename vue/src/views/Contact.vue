<template>
    <div class="contact">

        <vue-headful
                title="Contact details - Rob Wild | 8Manj Technologies Ltd online portfolio & CV"
                description="Description from vue-headful"
                keywords="some keywords here"
        />

        <b-card no-body class="overflow-hidden" style="max-width: 100vw;">
            <b-row no-gutters>
                <b-col md="6">
                    <b-card-body title="Horizontal Card">
                        <b-card-text>
                            This is a wider card with supporting text as a natural lead-in to additional content.
                            This content is a little bit longer.
                        </b-card-text>

                        <Social />

                    </b-card-body>
                </b-col>
                <b-col md="6">
                    <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
                </b-col>
            </b-row>
        </b-card>

    </div>
</template>

<script>

    import Social from "../components/Social";

    export default {
        name: 'Contact',
        components: {
            Social
        }
    }

</script>

<style scoped>

</style>
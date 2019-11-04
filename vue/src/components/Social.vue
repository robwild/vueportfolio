<template>
    <div class="social">
        <div>
            <b-button variant="outline-primary" href="#"><font-awesome-icon :icon="EM" size="1x" />Contact me</b-button>
        </div>

        <b-list-group horizontal="md">

            <b-list-group-item>
                <b-link href="#foo">
                    <font-awesome-icon :icon="LI" size="3x" />
                </b-link>
            </b-list-group-item>

            <b-list-group-item>
                <b-link href="#foo">
                    <font-awesome-icon :icon="FB" size="3x" />
                </b-link>
            </b-list-group-item>

            <b-list-group-item>
                <b-link href="#foo">
                    <font-awesome-icon :icon="EM" size="3x" />
                </b-link>
            </b-list-group-item>

            <b-list-group-item>
                <b-link href="#foo">
                    <font-awesome-icon :icon="PDF" size="3x" />
                </b-link>
            </b-list-group-item>

        </b-list-group>
    </div>
</template>

<script>

    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'
    import { faAt, faFilePdf } from '@fortawesome/free-solid-svg-icons'

    export default {
        name: "Social",
        data () {
            return {
                LI: faLinkedin,
                FB: faFacebook,
                EM: faAt,
                PDF: faFilePdf
            }
        },
        components: {
            FontAwesomeIcon
        }
    }
</script>

<style scoped>
    .list-group-item {
        border: none;
        background-color: transparent;
    }
</style>

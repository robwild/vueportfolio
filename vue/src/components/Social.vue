<template>
    <div class="social">

        <b-list-group horizontal>

            <b-list-group-item>
                <b-link href="https://www.linkedin.com/in/robert-wild-b2b4a519" target="_blank">
                    <font-awesome-icon :icon="LI" size="2x" />
                </b-link>
            </b-list-group-item>

            <b-list-group-item>
                <b-link href="https://www.facebook.com/profile.php?id=100009598604528" target="_blank">
                    <font-awesome-icon :icon="FB" size="2x" />
                </b-link>
            </b-list-group-item>

            <b-list-group-item>
                <b-link href="https://twitter.com/robwild007" target="_blank">
                    <font-awesome-icon :icon="TW" size="2x" />
                </b-link>
            </b-list-group-item>

            <b-list-group-item>
                <b-link href="https://join.skype.com/invite/chUGJYAiZCVx" target="_blank">
                    <font-awesome-icon :icon="SK" size="2x" />
                </b-link>
            </b-list-group-item>

            <b-list-group-item>
                <b-link href="mailto:robert.wild@8manj.co.uk">
                    <font-awesome-icon :icon="EM" size="2x" />
                </b-link>
            </b-list-group-item>

            <b-list-group-item>
                <b-link href="http://www.8manj.co.uk/cv/robwild-CV.pdf">
                    <font-awesome-icon :icon="PDF" size="2x" />
                </b-link>
            </b-list-group-item>

        </b-list-group>
    </div>
</template>

<script>

    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { faLinkedin, faFacebook, faTwitter, faSkype } from '@fortawesome/free-brands-svg-icons'
    import { faAt, faFilePdf } from '@fortawesome/free-solid-svg-icons'

    export default {
        name: "Social",
        data () {
            return {
                LI: faLinkedin,
                FB: faFacebook,
                EM: faAt,
                PDF: faFilePdf,
                TW: faTwitter,
                SK: faSkype
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

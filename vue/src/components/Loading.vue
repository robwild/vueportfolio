<template>
    <div class="loading">
        <p><font-awesome-icon :icon="SPIN" size="2x" /> Loading content, please wait it'll be worth your while</p>
    </div>

</template>

<script>

    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { faSpinner } from '@fortawesome/free-solid-svg-icons'

    export default {
        name: "Loading",
        data () {
            return {
                SPIN: faSpinner
            }
        },
        components: {
            FontAwesomeIcon
        }
    }
</script>

<style scoped>
    .loading {
        margin: 200px auto 0;
        color: #fff;
        font-size: 16px;
        text-align: center;
    }
</style>
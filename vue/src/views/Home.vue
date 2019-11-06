<template>

    <div>

        <div v-if="!ready">
            <Loading />
        </div>

          <div class="home" v-if="ready">
                <vue-headful
                        v-bind:title="page[0].field_page_title"
                        v-bind:description="page[0].field_page_description"
                        v-bind:keywords="page[0].field_page_keywords"
                />

              <h1 class="sr-only">{{ page[0].field_page_title }}</h1>
                <transition name="fade" mode="out-in">
                  <b-card
                  tag="article"
                  text-variant="white"
                  v-bind:title="page[0].field_content_title"
                  v-bind:sub-title="page[0].field_content_sub_title"
                  v-bind:style="{ backgroundImage: 'url(' + (page[0].field_background_image) + '), linear-gradient(to bottom, rgba(22,22,22,0), rgba(22,22,22,1))' }"
                  >

                      <b-card-text text-tag="div">
                          <div v-html="page[0].body"/>
                      </b-card-text>

                      <div class="prompt">
                          <b-button variant="outline-primary" router-link to="/contact"><font-awesome-icon :icon="EM" size="1x" />Contact me</b-button>
                      </div>

                      <Social />

                  </b-card>
                </transition>
          </div>

    </div>

</template>

<script>

  import Social from "../components/Social";
  import Loading from "../components/Loading";
  import axios from 'axios';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { faAt } from '@fortawesome/free-solid-svg-icons'

  var contentapi = "https://portfolio.8manj.co.uk/drupal/api/page/1";

  export default {
    name: 'home',
    components: {
        Social,
        Loading,
        FontAwesomeIcon
    },
    data() {
      return {
        page: null,
          EM: faAt
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


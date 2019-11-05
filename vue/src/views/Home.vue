<template>

  <div class="home" v-if="ready">
        <vue-headful
                v-bind:title="page[0].field_page_title"
                v-bind:description="page[0].field_page_description"
                v-bind:keywords="page[0].field_page_keywords"
        />
        <transition name="fade" mode="out-in">
          <b-card
          overlay
          v-bind:img-src="page[0].field_background_image"
          v-bind:img-alt="page[0].field_field_background_image_1"
          text-variant="white"
          v-bind:title="page[0].field_content_sub_title"
          v-bind:sub-title="page[0].field_content_sub_title"
          >

              <b-card-text>
                  <div v-html="page[0].body"/>
              </b-card-text>

              <Social />

          </b-card>
        </transition>
  </div>

</template>

<script>

  import Social from "../components/Social";
  import axios from 'axios';

  var contentapi = "https://portfolio.8manj.co.uk/drupal/api/page/1";

  export default {
    name: 'home',
    components: {
      Social
    },
    data() {
      return {
        page: null
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

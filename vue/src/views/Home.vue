<template>

  <div class="home">

    <vue-headful
            title="Rob Wild | 8Manj Technologies Ltd online portfolio & CV"
            description="Description from vue-headful"
            keywords="some keywords here"
    />

    <div>
      <b-card
              overlay
              img-src="https://picsum.photos/4096/2034/?image=3"
              img-alt="Card Image"
              text-variant="white"
              title="Image Overlay"
              sub-title="Subtitle"
      >
        <b-card-text>
<!--          <div class="slideInUp" v-html="page[0].body"/>-->
          <pre> {{ page }} </pre>
        </b-card-text>

        <Social />

      </b-card>
    </div>

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
    }
  };

</script>

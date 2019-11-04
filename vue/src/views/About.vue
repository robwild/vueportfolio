<template>
  <div class="about">

    <vue-headful
            title="About me - Rob Wild | 8Manj Technologies Ltd online portfolio & CV"
            description="Description from vue-headful"
            keywords="some keywords here"
    />
    <h1>This is an about page</h1>

    <pre>{{ page }}</pre>

    <b-card no-body class="overflow-hidden" style="max-width: 100vw;">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body title="Horizontal Card">
            <b-card-text>
              <div class="slideInRight">
              This is a wider card with supporting text as a natural lead-in to additional content.
              This content is a little bit longer.
              </div>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>

  </div>
</template>

<script>
  import axios from 'axios';

  var contentapi = "https://portfolio.8manj.co.uk/drupal/api/page/2";

  export default {
    name: 'about',

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

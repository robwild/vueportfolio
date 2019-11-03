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
          <div class="slideInUp">Some quick example text to build on the card and make up the bulk of the card's content.</div>
        </b-card-text>

        <Social />

      </b-card>
    </div>

  </div>

</template>

<script>

  import Social from "../components/Social";

  export default {
    name: 'home',
    components: {
      Social
    }
  }

</script>

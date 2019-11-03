<template>
  <div id="app">

    <Navigation />

    <transition
      name="fade"
      mode="out-in"
    >
      <router-view/>
    </transition>

    <Footer />

  </div>
</template>
<script>

  import Navigation from "./components/Navigation";
  import Footer from "./components/Footer";

  export default {

    mounted () {
      //  [App.vue specific] When App.vue is finish loading finish the progress bar
      this.$Progress.finish()
    },

    created () {
      //  [App.vue specific] When App.vue is first loaded start the progress bar
      this.$Progress.start()
    },

    components: {
      Footer,
      Navigation
    }
  }
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.5s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
</style>
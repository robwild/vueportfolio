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
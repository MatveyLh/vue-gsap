<template>
  <HomeComponent />
</template>

<script>
import HomeComponent from './components/HomeComponent.vue'

export default {
  name: 'App',
  components: {
    HomeComponent
  }
}
</script>

<style>
@font-face {
  font-family: "Raleway";
  src: local("Raleway"),
  url("./fonts/Raleway/Raleway-Regular.woff") format("truetype");
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
  font-family: Raleway, sans-serif;
  background: #000;
}
</style>

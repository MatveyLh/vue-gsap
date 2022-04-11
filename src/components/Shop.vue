<template>
  <div class="container">
    <div class="clothing">
      <h2>Clothes</h2>
      <ul>
        <li><a href="#">Hats</a></li>
        <li><a href="#">Swimsuit</a></li>
        <li><a href="#">Underwear</a></li>
        <li><a href="#">Misc</a></li>
        <li><a href="#">Hats</a></li>
      </ul>
    </div>
    <div class="nav-images">
      <img src="/images/hoodie.jpeg" alt="hoodie" />
      <img src="/images/hats.jpeg" alt="hoodie" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ShopComponent',
    props: {},
  }
</script>

<style scoped>
  .container {
    width: 80%;
    padding: 10px 50px;
  }
  .clothing {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .clothing h2 {
    font-size: 50px;
  }

  .clothing ul li {
    padding-bottom: 10px;
  }

  .clothing ul {
    list-style: none;
  }

  .clothing ul li a {
    color: #916356;
    text-decoration: none;
  }

  .nav-images {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .nav-images img {
    height: 250px;
  }
</style>

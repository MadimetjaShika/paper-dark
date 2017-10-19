<template>
  <div id="app" :class="{ 'navbar-enabled': notOnHomePage() }">
    <main>
      <h1>it Works!</h1>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
      };
    },
  };
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  body {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  main {
    flex: 1 0 auto;
  }
</style>

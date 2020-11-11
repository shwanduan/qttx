<template>
  <div id="app">
    <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    <!-- <header_top /> -->

    <router-view />
  </div>
</template>
 <script>
import header_top from "./components/Header/header_top";
export default {
  created() {
  },
  mounted() {
  
  },
  data() {
    return {
     
    
    };
  },
  components: {
    header_top,
  },
  method: {},
};
</script>
<style lang="scss">

html,

body {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 0.2rem;
}
#app {
  overflow-x:hidden;
 
  // ul,
  // li {
  //   list-style: none;
  // }
}
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30PX;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>

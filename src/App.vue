<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: Roboto-Regular, Roboto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
</style>

<script>
export default {
  // mounted () {
  //   console.log('app')
  //   window.addEventListener('resize', (event) => {
  //     const { type, name } = this.$route.meta;
  //     // console.log(type,name);
  //     if (type === 'mobile') {
  //       console.log('1')
  //       // this.$router.push({ name: `${name}Pc` });
  //     }
  //     else if (type === 'pc') {
  //       this.$router.push({ name: `${name}Mobile` });
  //     }
  //    }, false);
  // }
};
</script>

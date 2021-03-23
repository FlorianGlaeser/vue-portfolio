<template>
  <div id="app">
    <transition
      name="page-fade"
      mode="out-in"
      @enter="enter"
    >
      <router-view/>
    </transition>

    <TheFooter />
  </div>
</template>

<script>
import TheFooter from '@/components/TheFooter';

export default {
  name: 'App',
  components: {
    TheFooter,
  },
  methods: {
    enter() {
      setTimeout(() => {
        window.scroll(0, 0);
      });
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

body {
  overflow-y: auto;
}

#app {
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  // font-family: 'Lato',Helvetica,Arial,sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;

  font-family: 'Roboto', Arial, sans-serif;
  color: #2c3e50;
  font-size: 16px;
  font-weight: 400;

  .page-fade-enter-active, .page-fade-leave-active {
    transition: all .5s;
  }
  .page-fade-enter, .page-fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
}
</style>

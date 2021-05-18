<template>
  <a href="#about" title="Mehr Entdecken" @click="scrollToBottom($event)" id="wrapper-bottom-icon" class="icon-wrapper"
    v-scroll-reveal.reset="{
      origin: 'bottom',
      delay: 3000,
      distance: '40px',
      opacity: 0,
      duration: 1000}"
  >
    <i class="icon-animation-loop icon-up" />
    <i class="icon-animation icon-up" />
  </a>
</template>

<script>
export default {
  methods: {
    scrollToBottom(event, target) {
      event.preventDefault();

      this.intervalId = setInterval(() => {
        let Pointer = window.pageYOffset;
        let WindowHeight = window.innerHeight;
        let speed = 50;

        if( Pointer > (WindowHeight - 40) ) {
          speed = 2;
        } else if( Pointer > (WindowHeight - 200) ) {
          speed = 14;
        }

        if( Pointer >= WindowHeight ) {
          clearInterval( this.intervalId );
        }
        window.scroll(0, Pointer + speed);
      }, 20);
    },
  },
};
</script>

<style lang="scss">
#wrapper-bottom-icon {
  color: white;
  display: flex;
  font-size: 2em;
  flex-direction: column;
  position: absolute;
  text-decoration: none;
  overflow: hidden;

  .icon-animation-loop {
    animation: AnimationLoop 2s infinite ease-in-out;
    animation-delay: 3.8s;
    opacity: 0;
  }

  @keyframes AnimationLoop {
    0% {
        transform: translateY(100%);
        opacity: 1;
    }
    50% {
        transform: translateY(70%);
    }
    70% {
        transform: translateY(-20%);
        opacity: 0;
    }
  }
}
</style>

<template>
  <div>
    <a href="#app">
      <div class="icon-wrapper" @click="scrollToTop($event)">
        <i class="icon-animation icon-up" />
      </div>
    </a>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToTop(event) {
      event.preventDefault();

      this.intervalId = setInterval(() => {
        let Pointer = window.pageYOffset;
        let speed = 100;

        if (Pointer < 40) {
          speed = 2;
        } else if (Pointer < 200) {
          speed = 14;
        }

        if (Pointer === 0) {
          clearInterval(this.intervalId);
        }
        window.scroll(0, Pointer - speed);
      }, 20);
    },
  },
};
</script>

<style lang="scss">
.icon-animation {
  transform: translate(0, 0);
  display: inline-block;
}
.icon-wrapper:hover .icon-animation {
  animation: fromBottomToTopBouncy 0.3s forwards;
}

@keyframes fromBottomToTop {
  49% {
    transform: translateY(-100%);
  }
  50% {
    opacity: 0;
    transform: translateY(100%);
  }
  51% {
    opacity: 1;
  }
}
@keyframes fromBottomToTopBouncy {
  0% {
    transform: translateY(200%);
    opacity: 0;
  }
  50% {
    transform: translateY(-20%);
    opacity: 1;
  }
  100% {
    transform: translateY(0%);
  }
}
</style>

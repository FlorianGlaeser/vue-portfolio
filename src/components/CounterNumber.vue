<template>
  <div class="carousel" :style="{ transform: 'rotateX(-'+target+'deg)' }">

    <div class="carousel__cell"
      v-for="(counter, index) in 10"
      :key="index"
    >
      {{ index }}
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      target: 36 * this.number,
    };
  },
  props: {
    number: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.carousel {
  position: relative;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;

  @for $i from 1 through 6 {
    &:nth-child(#{$i}) {
      left: ($i - 1) * 50px;
    }
  }

  .carousel__cell {
    background: #293743;
    left: -1px;
    height: 42px;
    padding: 0 .2em;
    position: absolute;
    top: 16px;
  }

  @for $i from 1 through 10 {
    .carousel__cell:nth-child(#{$i}) {
      transform: rotateX( ($i - 1) * 36deg) translateZ(2.4em) scaleY(1.6);
    }
  }
}
</style>

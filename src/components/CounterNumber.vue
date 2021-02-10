<template>
  <div class="carousel" :style="{ transform: 'rotateX(-'+numb+'deg)' }">

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
      numb: 36 * this.number,
    };
  },
  props: {
    number: {
      type: Number,
      required: true,
    },
  },
  methods: {
    startFrom(counter) {
      let oo = this.number + counter -1;

      if( oo == 10 ) {
        oo = 0;
      }

      if( oo > 10 ) {
        oo = oo -10;
      }

      return oo;
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

  &:nth-child(1) { left: 1px }
  &:nth-child(2) { left: 51px }
  &:nth-child(3) { left: 101px }
  &:nth-child(4) { left: 151px }
  &:nth-child(5) { left: 201px }
  &:nth-child(6) { left: 251px }

  .carousel__cell {
    position: absolute;
    left: -1px;
    top: 16px;

    background: #293743;

    padding: 0 0.2em;
    height: 42px;
  }

  .carousel__cell:nth-child(1) { transform: rotateX(  0deg) translateZ(2.4em) scaleY(1.6); }
  .carousel__cell:nth-child(2) { transform: rotateX( 36deg) translateZ(2.4em) scaleY(1.6); }
  .carousel__cell:nth-child(3) { transform: rotateX( 72deg) translateZ(2.4em) scaleY(1.6); }
  .carousel__cell:nth-child(4) { transform: rotateX(108deg) translateZ(2.4em) scaleY(1.6); }
  .carousel__cell:nth-child(5) { transform: rotateX(144deg) translateZ(2.4em) scaleY(1.6); }
  .carousel__cell:nth-child(6) { transform: rotateX(180deg) translateZ(2.4em) scaleY(1.6); }
  .carousel__cell:nth-child(7) { transform: rotateX(216deg) translateZ(2.4em) scaleY(1.6); }
  .carousel__cell:nth-child(8) { transform: rotateX(252deg) translateZ(2.4em) scaleY(1.6); }
  .carousel__cell:nth-child(9) { transform: rotateX(288deg) translateZ(2.4em) scaleY(1.6); }
  .carousel__cell:nth-child(10) { transform: rotateX(324deg) translateZ(2.4em) scaleY(1.6); }
}
</style>

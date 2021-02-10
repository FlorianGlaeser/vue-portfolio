<template>
  <div :class="[animation ? 'picture-animate-frame' : 'picture-frame']">

    <img :src="require(`@/assets/${this.src}`)"
         :alt="`${this.alt}`"
         :style="{ transform: 'translate('+animationDistance+'px,'+distance+'px)' }"
    >

  </div>
</template>

<script>
const ElementDistance = {
  data() {
    return {
      distance: 0,
      distanceSettings: '',
    };
  },
  methods: {
    DistanceSettings(Element) {
      let Pointer = window.pageYOffset;
      let WindowHeight = window.innerHeight;
      let ElementTop = Element.offsetTop;
      let ElementBottom = ElementTop + Element.offsetHeight;

      this.distanceSettings = {Pointer, WindowHeight, ElementTop, ElementBottom};
    },
    IsScroll() {  // is element show and go scroll
      if(
        this.distanceSettings.Pointer + this.distanceSettings.WindowHeight > this.distanceSettings.ElementTop &&
        this.distanceSettings.Pointer < this.distanceSettings.ElementBottom
      ) {
        return true;
      }
    },
    DistanceCalculate(Element) {
      this.DistanceSettings(Element); // load later

      if( this.IsScroll() ) {
        this.distance = ((this.distanceSettings.Pointer - this.distanceSettings.ElementTop) * 50) / Element.offsetHeight;
      }
    },
  },
};

const ElementAnimation = {
  props: {
    animation: {
      type: Boolean,
      required: false,
    }
  },
  data() {
    return {
      animationDistance: 0,
      animationSettings: {
        animationStep: 0,
        bottomStart: -53,
        maxAnimationStep: 29,
        scrollDirection: '',
        stepCounter: 0,
        topStart: 0,
      },
    };
  },
  watch: {
    distance(newVal, oldVal) {
      if( this.animation ) {
        if( newVal > oldVal ) {
          this.animationSettings.scrollDirection = true;
        } else {
          this.animationSettings.scrollDirection = false;
        }
      }
    },
  },
  methods: {
    MidwaySteps() {
      if( this.animationSettings.stepCounter == 0 && this.animationSettings.animationStep == 0 ) {
        let negateBottomStart = -this.animationSettings.bottomStart // negate bottomStart
        let stepDifference = negateBottomStart / 30;
        let midwayStep = Math.round( (this.distance + negateBottomStart) / stepDifference );

        // max and min scale
        if( midwayStep < 0 ) {
          this.animationSettings.animationStep = 0;
        } else if ( midwayStep > this.animationSettings.maxAnimationStep ) {
          this.animationSettings.animationStep = this.animationSettings.maxAnimationStep;
        } else {
          this.animationSettings.animationStep = +midwayStep;
        }
      }
    },
    normallySteps() {
      if( this.animationSettings.scrollDirection ) { // scroll bottom
        if( this.distance <= this.animationSettings.bottomStart ) { // reset settings
          this.animationSettings.stepCounter = this.animationSettings.bottomStart;
          this.animationSettings.animationStep = 0;
        }
        else if( this.distance > this.animationSettings.stepCounter && this.distance >= this.animationSettings.bottomStart && this.animationSettings.animationStep < 29 ) {
          this.animationSettings.stepCounter = this.distance + 1.6;
          this.animationSettings.animationStep++;
        }
      } else { // scroll top
        if( this.distance >= this.animationSettings.topStart ) { // reset settings
          this.animationSettings.stepCounter = this.animationSettings.topStart;
          this.animationSettings.animationStep = this.animationSettings.maxAnimationStep;
        } else if( this.distance < this.animationSettings.stepCounter && this.animationSettings.animationStep > 0 ) {
          this.animationSettings.stepCounter = this.distance - 1.6;
          this.animationSettings.animationStep--;
        }
      }
    },
    AnimateDistanceCalculate() {
      if( this.animation ) {
        this.MidwaySteps();
        this.normallySteps();
        this.animationDistance = (this.animationSettings.animationStep * -400);
      }
    },
  },
};

export default {
  mixins: [ElementDistance, ElementAnimation],
  props: ["src", "alt"],
  methods: {
    // handleScroll(event) {
    //   if( window.pageYOffset > 650 ) {
    //     this.isScrolled = true;
    //   } else {
    //     this.isScrolled = false;
    //   }
    // },
    onScroll(e) {
      // this.windowTop = e.target.documentElement.scrollTop;

      this.DistanceCalculate(this.$el);
      this.AnimateDistanceCalculate();
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);

    this.DistanceCalculate(this.$el);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },  
};
</script>

<style lang="scss">
.picture-frame {
  display: inline-block;
  height: 50vh;
  overflow: hidden;

  img {
    display: inline-block;
    height: 70vh;
    max-width: 100%;
    object-fit: cover;
  }
}

.picture-animate-frame {
  display: inline-block;
  height: 50vh;
  overflow: hidden;
  width: 400px;
}
</style>

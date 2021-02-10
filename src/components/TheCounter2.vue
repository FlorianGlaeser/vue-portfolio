<template>
  <div id="counter">
    <h4>Counter</h4>

    <div class="scene">
      <div class="carousel">
        <div class="carousel__cell">0</div>
        <div class="carousel__cell">1</div>
        <div class="carousel__cell">2</div>
        <div class="carousel__cell">3</div>
        <div class="carousel__cell">4</div>
        <div class="carousel__cell">5</div>
        <div class="carousel__cell">6</div>
        <div class="carousel__cell">7</div>
        <div class="carousel__cell">8</div>
        <div class="carousel__cell">9</div>
      </div>

      <div class="carousel">
        <div class="carousel__cell">0</div>
        <div class="carousel__cell">1</div>
        <div class="carousel__cell">2</div>
        <div class="carousel__cell">3</div>
        <div class="carousel__cell">4</div>
        <div class="carousel__cell">5</div>
        <div class="carousel__cell">6</div>
        <div class="carousel__cell">7</div>
        <div class="carousel__cell">8</div>
        <div class="carousel__cell">9</div>
      </div>

      <div class="carousel">
        <div class="carousel__cell">0</div>
        <div class="carousel__cell">1</div>
        <div class="carousel__cell">2</div>
        <div class="carousel__cell">3</div>
        <div class="carousel__cell">4</div>
        <div class="carousel__cell">5</div>
        <div class="carousel__cell">6</div>
        <div class="carousel__cell">7</div>
        <div class="carousel__cell">8</div>
        <div class="carousel__cell">9</div>
      </div>
    </div>

  </div>
</template>


<style lang="scss">
#counter {
  @keyframes spinn {
    from { transform: rotateX(0deg);    }
    10%  { transform: rotateX(-36deg);  }
    20%  { transform: rotateX(-72deg);  }
    30%  { transform: rotateX(-108deg); }
    40%  { transform: rotateX(-144deg); }
    50%  { transform: rotateX(-180deg); }
    60%  { transform: rotateX(-216deg); }
    70%  { transform: rotateX(-252deg); }
    80%  { transform: rotateX(-288deg); }
    90%  { transform: rotateX(-324deg); }
    to   { transform: rotateX(-360deg); }
  }

  .scene {
    position: relative;
    display: flex;
    width: 100px;
    height: 100px;

    background: #213239;
    border-radius: 0.3em;
    font-size: 42px;
    padding-top: 10px;

    overflow: hidden;
    border-style: solid;
    border-width: 0.2em 0.4em;
    border-color: #213239;

    .carousel {
      position: relative;

      animation-name: spinn;
      animation-timing-function: ease-out;
      animation-iteration-count: infinite;
      animation-duration: 10s;
      -webkit-transform-style: preserve-3d;
      -moz-transform-style: preserve-3d;
      -ms-transform-style: preserve-3d;
      transform-style: preserve-3d;

      &:nth-child(2) { left: 50px }
      &:nth-child(3) { left: 100px }

      .carousel__cell {
        position: absolute;
        left: 0;
        top: 28px;

        background: #293743;
        color: #c0af9b;
        font-weight: bold;
        padding: 0 0.2em;

        height: 42px;
      }

      .carousel__cell:nth-child(1) { transform: rotateX(  0deg) translateZ(1.5em); }
      .carousel__cell:nth-child(2) { transform: rotateX( 36deg) translateZ(1.5em); }
      .carousel__cell:nth-child(3) { transform: rotateX( 72deg) translateZ(1.5em); }
      .carousel__cell:nth-child(4) { transform: rotateX(108deg) translateZ(1.5em); }
      .carousel__cell:nth-child(5) { transform: rotateX(144deg) translateZ(1.5em); }
      .carousel__cell:nth-child(6) { transform: rotateX(180deg) translateZ(1.5em); }
      .carousel__cell:nth-child(7) { transform: rotateX(216deg) translateZ(1.5em); }
      .carousel__cell:nth-child(8) { transform: rotateX(252deg) translateZ(1.5em); }
      .carousel__cell:nth-child(9) { transform: rotateX(288deg) translateZ(1.5em); }
     .carousel__cell:nth-child(10) { transform: rotateX(324deg) translateZ(1.5em); }
    }
  }
}

// https://codepen.io/desandro/pen/wjeBpp
// https://www.the-art-of-web.com/css/3d-transforms/

// https://vuejs.org/v2/guide/transitioning-state.html
</style>

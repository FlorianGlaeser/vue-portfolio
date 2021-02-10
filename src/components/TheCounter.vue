<template>
  <div>
    <h4>Counter</h4>

    <div id="counter">

      <CounterNumber v-for="(num, index) in number"
        :key="index"
        :number="parseInt(num)"
        v-scroll-reveal="{
          origin: 'top',
          delay: index*800,
          distance: '0px',
          rotate: {x: num*36},
          opacity: null,
          duration: 2000}"
      />

    </div>
  </div>
</template>

<script>
import CounterNumber from '@/components/CounterNumber';

export default {
  components: {
    CounterNumber,
  },
  props: {
    number: {
      type: Array,
      required: true,
    }
  },
};
</script>


<style lang="scss">
#counter {
  position: relative;
  display: flex;
  width: 290px;
  height: 72px;

  background: #213239;
  border-radius: 0.3em;
  color: #c0af9b;
  font-family: Helvetica, sans-serif;
  font-size: 42px;
  font-weight: bold;

  overflow: hidden;
  border-style: solid;
  border-width: 0.2em 0.4em;
  border-color: #213239;
}
</style>

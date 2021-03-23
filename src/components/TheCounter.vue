<template>
  <div class="counter">
    <div class="dateLabel"
      v-for="(tag, index) in dateTag"
      :key="index"
    >
      <label :for="tag">{{tag}}</label>
      
      <div class="counterNumbers" :id="tag">
        <CounterNumber v-for="dateNumber in dateNumbers[index]"
          :key="dateNumber"
          :number="parseInt(dateNumber)"
          v-scroll-reveal="{
            origin: 'top',
            delay: index*800,
            distance: '0px',
            rotate: {x: dateNumber*36},
            opacity: null,
            duration: 2000}"
        />
      </div>
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
    date: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      dateNumbers: this.DateDifferenceArray(this.date),
      dateTag: ['Jahre', 'Monate', 'Tage'],
    };
  },
  methods: {
    DateDifferenceArray(DateString) {
      let insetDate = new Date(DateString);
      let currentDate = new Date();

      let JJ = currentDate.getFullYear() - insetDate.getFullYear() - 1;
      let MM = (12 - insetDate.getMonth()) + currentDate.getMonth();
      // let MM = ((12 - insetDate.getMonth()) + currentDate.getMonth() - 12);
      let DD = (31 - insetDate.getDate()) + currentDate.getDate();
        if( DD > 31 ) {
          DD = DD - 31;
        } else {
          MM = MM - 1;
        }
      let DateArray = [JJ, MM, DD];

      // change to standard norm
      for (let index=0; index < DateArray.length; index++) {
        DateArray[index] =  String( Math.abs( DateArray[index] ) ).padStart(2, '0');
      }

      // split in separate numbers
      // this.dateNumbersSplit = DateArray.join('').split('');
      return DateArray;
    },
  },
};
</script>


<style lang="scss">
.counter {
  display: flex;
  justify-content: center;

  .dateLabel {
    font-family: Helvetica, sans-serif;
    font-size: 1.4rem;
    text-align: center;
    text-transform: uppercase;
  }

  .counterNumbers {
    position: relative;
    display: flex;
    width: 2em;
    height: 72px;

    background: #213239;
    color: #c0af9b;
    font-family: Helvetica, sans-serif;
    font-size: 42px;
    font-weight: bold;

    overflow: hidden;
    border-style: solid;
    border-width: 0.2em 0.4em;
    border-color: #213239;
  }

  :first-of-type .counterNumbers {
    border-radius: .3em 0 0 .3em;
  }
  :last-of-type .counterNumbers {
    border-radius: 0 .3em .3em 0;
  }
}
</style>

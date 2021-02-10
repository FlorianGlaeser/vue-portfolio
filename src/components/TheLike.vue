<template>
  <div id="like" @click.once="like">
    <!-- <i :class="smile()" /> -->
    <i id="smile" class="icon-smile" />
    <span>{{ likes }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      likes: 0,
      showSmile: false,
    };
  },
  methods: {
    like() {
      this.likes++;
      this.showSmile = true;
      smile.className = "icon-grin";
    },
    smile() {
      return {
        "icon-smile": this.showSmile == false,
        "icon-grin": this.showSmile == true,
      };
    },
  },
};
</script>

<style lang="scss">
#like {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 14px;
  transition: all 0.5s;
  i {
    padding-right: 12px;
    font-size: 1.3em;
    // color: #5cb68c;
  }
  &:hover i::before {
    content: "\e9e9";
  }
  &:active {
    transition: all 0s;
    background-color: rgba(#04c2c9, 0.6);
    transform: scale(0.9);
  }
  span {
    color: var(--font-default);
  }
}
</style>

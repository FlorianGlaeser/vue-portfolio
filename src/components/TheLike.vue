<template>
  <div id="like" title="Gefällt dir was du siehst?" @click.once="like">
    <i :class="[isLike ? 'icon-grin' : 'icon-smile']" />
    <span>{{ likes }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      likes: 0,
      isLike: false,
    };
  },
  methods: {
    like() {
      this.likes++;
      this.isLike = true;
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

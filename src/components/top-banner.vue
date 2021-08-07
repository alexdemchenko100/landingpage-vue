<template>
  <div class="top-banner" :class="isVisible ? '' : 'hidden'">
    <router-link :to="{ name: 'network', hash: '#contact-us' }">Subscribe to get insights from our companies and invites to our events.</router-link>
  </div>
</template>

<script>
  export default {
    name: 'top-banner',
    data: () => ({
      isVisible: true,
    }),
    mounted() {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
          this.isVisible = false;
        } else {
          this.isVisible = true;
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
  .top-banner {
    background: #ffcc01 none repeat center center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    transition: all ease 0.5s;

    a {
      color: #2d292f;
      text-decoration: none;
      line-height: 1em;
      font-weight: 600;
      text-align: center;
    }

    &.hidden {
      margin-top: -50px;
    }
  }
</style>
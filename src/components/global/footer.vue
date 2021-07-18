<template>
  <footer class="main-footer">
      <div class="wrapper">
        <div class="logo-copyright">
            &copy; Authentic Ventures
        </div>
        <div class="footer--nav">
            <router-link :to="{ name: 'about' }">
              About
            </router-link>
            <router-link :to="{ name: 'founders' }">
              Founders
            </router-link>
            <router-link :to="{ name: 'network' }">
              Network
            </router-link>
            <a href="mailto:info@authentic-ventures.com">Contact</a>
            <router-link :to="{ name: 'privacy' }">
              Privacy
            </router-link>
            <router-link :to="{ name: 'tos' }">
              Terms
            </router-link>
        </div>
      </div>
  </footer>
</template>

<script>
  import Vue from 'vue';

  export default {
    name: 'footer',
  }
</script>

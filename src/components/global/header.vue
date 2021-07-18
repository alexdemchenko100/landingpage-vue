<template>
    <header class="top-header">
        <nav class="top-bar wrapper">
            <div class="top-bar-left">
                <ul class="menu">
                    <li class="logo">
                        <router-link :to="{ name: 'home' }">
                            <img src="/public/img/logo.svg" />
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'about' }" class="vertical-align-middle">
                            <span class="show-for-medium">About</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'founders' }" class="vertical-align-middle">
                            <span class="show-for-medium">Founders</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'network' }" class="vertical-align-middle">
                            <span class="show-for-medium">Authentic Ventures Network</span>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="top-bar-right">
                <ul class="menu align-right">
                    <li v-if="uid">
                        <router-link :to="{ name: 'profile' }">
                            <span class="show-for-medium">Profile</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link v-if="!uid" :to="{ name: 'register' }">
                            <span class="show-for-medium">Join Us</span>
                        </router-link>
                        <router-link v-if="!uid" :to="{ name: 'login' }">
                            <span class="show-for-medium">Login</span>
                        </router-link>
                        <router-link v-if="uid" :to="{ name: 'logout' }">
                            <span class="show-for-medium">Logout</span>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="menu-button">
                <a class="menu-link show-for-small-only">
                    <span v-on:click=" collapsed = !collapsed">Menu</span>
                </a>
            </div>
            <div v-if="!collapsed" class="menu-small show-for-small-only">
                <router-link :to="{ name: 'about' }" class="block-link vertical-align-middle" v-on:click=" collapsed = !collapsed">
                    About
                </router-link>
                <router-link :to="{ name: 'founders' }" class="block-link vertical-align-middle">
                    Founders
                </router-link>
                <router-link :to="{ name: 'network' }" class="block-link vertical-align-middle">
                    Authentic Ventures Network
                </router-link>
                <router-link v-if="uid" :to="{ name: 'profile' }">
                    Profile
                </router-link>
                <router-link v-if="!uid" :to="{ name: 'register' }">
                    Join Us
                </router-link>
                <router-link v-if="!uid" :to="{ name: 'login' }">
                    Login
                </router-link>
                <router-link v-if="uid" :to="{ name: 'logout' }">
                    Logout
                </router-link>
            </div>
        </nav>
    </header>
</template>

<script>
  import Vue from 'vue';

  export default {
    name: 'header',
    data() {
        return {
            collapsed: true,
        }
    },
    computed: {
      uid() {
        return this.$store.state.global.user._id
      },
    }
  }
</script>

<style lang="scss" scoped>
    @import '../../css/settings';

    $white: get-color(white);

    a {  color: $white;  }
    i { margin-right: 1em; }

    nav.top-bar { background-color: transparent; }

    .top-header {
        position: absolute;
        z-index: 99999;
        width: 100%;
        padding-top: 2rem;
    }

    nav.top-bar {
        .top-bar-left ul { background-color: transparent; }
        .top-bar-right ul { background-color: transparent; }
        .logo img { height: 50px; }
        ul li .vertical-align-middle { margin-top: 15px; }
        a { text-transform: uppercase; letter-spacing: 5px; font-weight: bold; font-size: 11px;}
        a:hover { color: #EEBC57; }
    }

    .menu-small {
        position: absolute;
        top: 120px;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        background-color: black;
        height: 100vh;
        a {
            display: block;
            padding: 40px 0 20px;
            text-align: center;
        }
    }

</style>

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
                        <router-link :to="{ name: 'founders' }" class="vertical-align-middle">
                            <span class="show-for-medium">Founders</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'inspire' }" class="vertical-align-middle">
                            <span class="show-for-medium">Inspire</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'about' }" class="vertical-align-middle">
                            <span class="show-for-medium">Us</span>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="top-bar-right">
                <ul class="menu align-right">
                    <li>
                        <router-link :to="{ name: 'network' }">
                            <span class="show-for-medium">Our Network</span>
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
                <router-link :to="{ name: 'founders' }" class="block-link vertical-align-middle">
                    Founders
                </router-link>
                <router-link :to="{ name: 'inspire' }" class="block-link vertical-align-middle">
                    Inspire
                </router-link>
                <router-link :to="{ name: 'about' }" class="block-link vertical-align-middle">
                    Us
                </router-link>
                <router-link :to="{ name: 'network' }" class="block-link vertical-align-middle">
                    Our Network
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

    $white: #fefefe;

    a {  color: $white;  }
    i { margin-right: 1em; }

    nav.top-bar {
        background-color: transparent;
        display: flex;
        align-items: baseline;

        .top-bar-left {
            ul {
                background-color: transparent;
            }
        }

        .top-bar-right {
            ul {
                background-color: transparent;
                margin-top: -10px;
            }
        }

        .logo {
            img {
                height: 50px;
            }
        }

        a {
            text-transform: uppercase;
            letter-spacing: 5px;
            font-weight: 700;
            font-size: 11px;

            &:hover {
                color: #eebc57;
            }
        }
    }

    .top-header {
        position: fixed;
        z-index: 99999;
        width: 100%;
        padding-top: 0;
        background: #2d292f;

        li {
            align-items: center;
            display: flex;
        }
    }

    .menu-small {
        position: absolute;
        top: 44px;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        background-color: #000;
        height: 100vh;

        a {
            display: block;
            padding: 40px 0 20px;
            text-align: center;
        }
    }

    @media (max-width:700px) {

        .top-header {
            padding-top: 0;
            background: #000;
        }

        nav.top-bar {
            .logo {
                img {
                    height: 30px;
                }
            }
        }
    }

</style>

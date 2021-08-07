<template>
  <div class="founders" id="founders">
    <div class="founder-grid">
      <div class="founder" :class="founder.class" v-for="(founder, idx) in founders" :key="idx" @click="eventHandlerForMobile($event, idx)">
        <a :href="founder.url" :target="founder.local ? '' : '_blank'">
          <img :src="founder.founders.img" class="bg">
        </a>
        <div class="founder-logo">
          <img :src="founder.logo">
          <span class="tag" v-if="founder.tag">{{ founder.tag }}</span>
        </div>
        <h4>{{ founder.founders.names }}</h4>
      </div>
      <div class="founder">
        <h4 class="company">Stealth Company</h4>
        <h4>(Enterprise Software)</h4>
      </div>
    </div>
    <p><router-link :to="{ name: 'investments', hash: '#prior' }">Prior Investments</router-link></p>
  </div>
</template>

<script>
  export default {
    name: 'founder-grid',
    data: () => ({
      hoverItem: null,
      founders: [
        {
          class: 'two-col',
          logo: '/public/img/logos/accord.svg',
          url: 'https://inaccord.com/',
          founders: {
            img: 'public/img/founders/Accord Founders.png',
            names: 'Ryan Rich, Ross Rich, and Wayne Pan',
          }
        },
        {
          logo: '/public/img/logos/ai.png',
          url: 'https://www.aiinsurance.io/',
          founders: {
            img: 'public/img/founders/cameron.jpg',
            names: 'Cameron MacArthur',
          }
        },
        {
          class: 'two-col',
          logo: '/public/img/logos/AmiraLogo.svg',
          url: 'https://www.amiralearning.com',
          founders: {
            img: 'public/img/founders/mark_and_pete.png',
            names: 'Mark Angel &amp; Pete Jungwith',
          }
        },
        {
          logo: '/public/img/logos/datatron.png',
          url: 'https://www.datatron.com/',
          founders: {
            img: 'public/img/founders/harish_jerry.jpg',
            names: 'Harish Doddi &amp; Jerry Xu',
          }
        },
        {
          logo: '/public/img/logos/HDP_Health.png',
          url: '',
          tag: 'Inactive',
          founders: {
            img: 'public/img/founders/brian-clark.png',
            names: 'Brian Clark',
          }
        },
        {
          class: 'kit',
          local: true,
          url: '/founders/camille-hearst',
          logo: '/public/img/logos/kit-aquired.png',
          founders: {
            img: 'public/img/founders/camille.jpg',
            names: 'Camille Hearst',
          }
        },
        {
          class: 'kuli',
          url: 'https://www.kulikulifoods.com/',
          logo: '/public/img/logos/kulikuli.png',
          founders: {
            img: 'public/img/founders/lisa-kuli-kuli.jpg',
            names: 'Lisa Curtis',
          }
        },
        {
          url: 'https://cloud.name-coach.com/',
          logo: '/public/img/logos/namecoach.png',
          founders: {
            img: 'public/img/founders/praveen.jpg',
            names: 'Praveen Shanbhag',
          }
        },
        {
          url: 'https://newdayimpact.com/',
          logo: '/public/img/logos/newday.png',
          founders: {
            img: 'public/img/founders/doug.jpg',
            names: 'Doug Heske',
          }
        },
        {
          url: 'https://www.offsight.com/',
          logo: '/public/img/logos/offsight.svg',
          founders: {
            img: 'public/img/founders/vikas_and_andrew.png',
            names: 'Vikas Murali &amp; Andrew Xue',
          }
        },
        {
          class: 'two-col',
          url: 'https://pilot.com/',
          logo: '/public/img/logos/pilot.png',
          founders: {
            img: 'public/img/founders/pilot.jpg',
            names: 'Jessica McKellar, Jeff Arnold, and Waseem Daher',
          }
        },
        {
          url: 'https://trysparrow.com/',
          logo: '/public/img/logos/sparrow.svg',
          founders: {
            img: 'public/img/founders/deborah.jpeg',
            names: 'Deborah Hanus',
          }
        },
        {
          url: '',
          logo: '/public/img/logos/SuperHeroic.png',
          tag: 'Inactive',
          founders: {
            img: 'public/img/founders/jason.png',
            names: 'Jason Mayden',
          }
        },
        {
          url: 'https://www.wander.com/',
          logo: '/public/img/logos/wander.png',
          founders: {
            img: 'public/img/founders/john-andrew.jpeg',
            names: 'John Andrew Entwistle',
          }
        },
        {
          url: '',
          logo: '/public/img/logos/wizely.png',
          tag: 'Inactive',
          founders: {
            img: 'public/img/founders/paris.png',
            names: 'Paris Benson',
          }
        },
      ]
    }),
    methods: {
      eventHandlerForMobile(e, index) {
        if (window.innerWidth < 600 && this.hoverItem == index) {
          this.hoverItem = null;
        } else {
          e.preventDefault();
          this.hoverItem = index;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .object-fit-unset {
    object-fit: unset;
  }
</style>
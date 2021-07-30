<template>
  <div class="founders" id="founders">
    <div class="founder-grid">
      <div class="founder two-col">
        <a href="https://inaccord.com/" target="_blank">
          <img src="public/img/founders/Accord Founders.png" class="bg">
        </a>
        <img src="/public/img/logos/accord.svg" class="founder-logo">
        <h4>Ryan Rich, Ross Rich, and Wayne Pan</h4>
      </div>
      <div class="founder">
        <a href="https://www.aiinsurance.io/" target="_blank">
          <img src="public/img/founders/cameron.jpg" class="bg">
        </a>
        <img src="/public/img/logos/ai.png" class="founder-logo">
        <h4>Cameron MacArthur</h4>
      </div>
      <div class="founder two-col">
        <a href="https://www.amiralearning.com" target="_blank">
          <img src="public/img/founders/mark_and_pete.png" class="bg">
        </a>
        <img src="/public/img/logos/AmiraLogo.svg" class="founder-logo">
        <h4>Mark Angel &amp; Pete Jungwith</h4>
      </div>
      <div class="founder">
        <a href="https://www.datatron.com/" target="_blank">
          <img src="public/img/founders/harish_jerry.jpg" class="bg">
        </a>
        <img src="/public/img/logos/datatron.png" class="founder-logo">
        <h4>Harish Doddi &amp; Jerry Xu</h4>
      </div>
      <div class="founder">
        <a>
          <img src="public/img/founders/brian-clark.png" class="bg">
        </a>
        <div class="founder-logo">
          <img src="/public/img/logos/HDP_Health.png">
          <span class="tag">Inactive</span>
        </div>
        <h4>Brian Clark</h4>
      </div>
      <div class="founder kit">
        <a href="/founders/camille-hearst" class="">
          <img src="public/img/founders/camille.jpg" class="bg">
        </a>
        <img src="/public/img/logos/kit-aquired.png" class="founder-logo">
        <h4>
          Camille Hearst
        </h4>
      </div>
      <div class="founder kuli">
        <a href="https://www.kulikulifoods.com/" target="_blank">
          <img src="public/img/founders/lisa-kuli-kuli.jpg" class="bg">
        </a>
        <img src="/public/img/logos/kulikuli.png" class="founder-logo">
        <h4>Lisa Curtis</h4>
      </div>
      <div class="founder">
        <a href="https://cloud.name-coach.com/" target="_blank">
          <img src="public/img/founders/praveen.jpg" class="bg">
        </a>
        <img src="/public/img/logos/namecoach.png" class="founder-logo">
        <h4>Praveen Shanbhag</h4>
      </div>
      <div class="founder">
        <a href="https://newdayimpact.com/" target="_blank">
          <img src="public/img/founders/doug.jpg" class="bg">
        </a>
        <img src="/public/img/logos/newday.png" class="founder-logo">
        <h4>Doug Heske</h4>
      </div>
      <div class="founder">
        <a href="https://www.offsight.com/" target="_blank">
          <img src="public/img/founders/vikas_and_andrew.png" class="bg object-fit-unset">
        </a>
        <img src="/public/img/logos/offsight.svg" class="founder-logo">
        <h4>Vikas Murali &amp; Andrew Xue</h4>
      </div>
      <div class="founder two-col">
        <a href="https://pilot.com/" target="_blank">
          <img src="public/img/founders/pilot.jpg" class="bg">
        </a>
        <img src="/public/img/logos/pilot.png" class="founder-logo">
        <h4>Jessica McKellar, Jeff Arnold, and Waseem Daher</h4>
      </div>
      <div class="founder">
        <a href="https://trysparrow.com/" target="_blank">
          <img src="public/img/founders/deborah.jpeg" class="bg">
        </a>
        <img src="/public/img/logos/sparrow.svg" class="founder-logo">
        <h4>Deborah Hanus</h4>
      </div>
      <div class="founder">
        <a>
          <img src="public/img/founders/jason.png" class="bg">
        </a>
        <div class="founder-logo">
          <img src="/public/img/logos/SuperHeroic.png">
          <span class="tag">Inactive</span>
        </div>
        <h4>Jason Mayden</h4>
      </div>
      <div class="founder">
        <a href="https://www.wander.com/" target="_blank">
          <img src="public/img/founders/john-andrew.jpeg" class="bg">
        </a>
        <img src="/public/img/logos/wander.png" class="founder-logo">
        <h4>John Andrew Entwistle</h4>
      </div>
      <div class="founder">
        <a>
          <img src="public/img/founders/paris.png" class="bg">
        </a>
        <div class="founder-logo">
          <img src="/public/img/logos/wizely.png">
          <span class="tag">Inactive</span>
        </div>
        <h4>Paris Benson</h4>
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
    name: 'founder-grid'
  }
</script>

<style lang="scss" scoped>
  .object-fit-unset {
    object-fit: unset;
  }
</style>
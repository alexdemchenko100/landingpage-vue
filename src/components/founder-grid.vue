<template>
    <div class="founders" id="founders">
      <h3>Founders</h3>
      <div class="grid">
          <div class="col founder">
              <router-link :to="{ name: 'jason-mayden' }">
                <img src="public/img/founders/jason.jpg" />
              </router-link>
              <h4>Jason Mayden</h4>
              <p>
                  <a href="https://superheroic.com/" target="_blank">Super Heroic</a>
              </p>
          </div>
          <div class="col founder">
              <router-link :to="{ name: 'camille-hearst' }">
                <img src="public/img/founders/camille.jpg" />
              </router-link>
              <h4>
                  Camille Hearst
              </h4>
              <p>
                  <a href="http://www.kit.com/" target="_blank">KIT</a>
              </p>
          </div>
          <div class="col founder">
              <img src="public/img/founders/naveen.jpg" />
              <h4>Naveen Selvadurai</h4>
              <p>
                  <a href="http://www.kit.com/" target="_blank">KIT</a>
              </p>
          </div>
          <div class="col founder">
              <img src="public/img/founders/praveen.jpg" />
              <h4>Praveen Shanbhag</h4>
              <p>
                  <a href="https://cloud.name-coach.com/" target="_blank">Name Coach</a>
              </p>
          </div>
          <div class="col founder">
              <img src="public/img/founders/harish_jerry.jpg" />
              <h4>Harish Doddi &amp; Jerry Xu</h4>
              <p>
                  <a href="https://www.datatron.com/" target="_blank">Datatron</a>
              </p>
          </div>
          <div class="col founder">
              <img src="public/img/founders/harsh.jpg" />
              <h4>Harshal Sisodia</h4>
              <p>
                  <a href="https://superheroic.com/" target="_blank">Super Heroic</a>
              </p>
          </div>
          <div class="col founder">
              <img src="public/img/founders/brian.jpg" />
              <h4>Brian Clark</h4>
              <p>
                  <a href="https://www.hdphealth.com/" target="_blank">HDP Health</a>
              </p>
          </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'founder-grid'
  }
</script>

<style lang="scss" scoped>
    @import '../css/settings';
</style>
<template>
    <div class="message values">
        <a name="#values"></a>
        <div class="message-text">
        <h3>Here's What we look for</h3>
        <div class="grid">
            <div class="col value"><img src="public/img/icons/flag.svg">
            <h4>Shared values</h4>
            <p>
                We invest in founders who share our values. To work with us you must demonstrate trust, honesty, integrity,
                inclusion and a willingness to put customers and stakeholders first.
            </p>
            </div>
            <div class="col value"><img src="public/img/icons/grow.svg">
            <h4>Early stage</h4>
            <p>
                We typically invest first in Seed or Seed Extension rounds where we believe we can add the most value. We
                also selectively invest in Series A and Series B rounds
            </p>
            </div>
            <div class="col value"><img src="public/img/icons/flow.svg">
            <h4>Hard Problems</h4>
            <p>
                We only invest in founders solving problems that, if solved, can create a tremendous amount of value for
                customers and stakeholders. Bold, ambitious visions are favored over modest ones.
            </p>
            </div>
            <div class="col value"><img src="public/img/icons/puzzle.svg">
            <h4>Product Market Fit</h4>
            <p>
                We favor early stage companies that can demonstrate initial product market fit with a modest amount of
                capital. We look for meaningful evidence of product market fit in our Series A and Series B investments.
            </p>
            </div>
            <div class="col value"><img src="public/img/icons/heart.svg">
            <h4>Areas of Interest</h4>
            <p>
                We invest primarily in enterprise software companies. Companies leveraging Machine Learning and AI to drive
                automation in the enterprise are of particular interest. We also invest in FinTech, digital health, deep
                tech and selectively in consumer companies.
            </p>
            </div>
            <div class="col value"><img src="public/img/icons/browser.svg">
            <h4>Technical background</h4>
            <p>
                We consider companies with a solo founder but generally prefer two or more founders, where at least one has
                a technical background. Many of the SAAS software founders we back have engineering or product management
                backgrounds with prior startup or growth company experience and a track record of effective leadership.
            </p>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'values'
  }
</script>

<style lang="scss" scoped>
    h3 {
        color: #fff;
        font-size: 18px;
        font-weight: 500;
        letter-spacing: 10px;
        text-transform: uppercase;
        font-family: GT,serif;
    }
    
    @media (min-width:640px) {
        .grid {
            display: grid;
            grid-gap: 20px;
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (min-width: 720px) {
        h3 {
            letter-spacing: 20px;
        }
    }

    @media (min-width:750px) {
        .grid {
            grid-template-columns: repeat(3, 1fr);
        }
    }

</style>

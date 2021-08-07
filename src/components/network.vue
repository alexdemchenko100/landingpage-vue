<template>
  <div id="about" class="no-pad">
    <header class="hero hero__founder" style="background-image: url(/public/img/network.jpg);">
      <h1 class="hero-header">
        <span class="founder-header--name">THE AUTHENTIC NETWORK</span>
      </h1>
    </header>
    <div class="wrapper inner-wrapper">
      <div class="message clearfix">
        <div class="sideways-heading">
            <span class="sideways-heading--text">
                NETWORK
            </span>
        </div>
        <div class="message-text">
            <p>
              The Authentic Network is a unique, inclusive and value-centric network of talent and subject matter experts. A community of like-minded entrepreneurs, founders, investors and growth hackers, the Authentic Network is committed to solving meaningful problems together.
            </p>
            <p id="contact-us">
              The Authentic Network is a resource to our portfolio companies and Network members. Our network helps our teams and each other think differently and win.
            </p>
            <p>
              Sign up to connect with our community.
            </p>

            <p>
              We’ll send you periodic insights on the startup ecosystem, learnings from our portfolio companies, reading recommendations, and invites to our events.
            </p>

            <div id="contact-form">
              <form method="post" action="">
                <div class="form-row">
                  <label for="name">Name:</label>
                  <div class="d-flex">
                    <input type="text" id="first_name" name="first_name" placeholder="First name">
                    <input type="text" id="last_name" name="last_name" placeholder="Last name">
                  </div>
                </div>
                <div class="form-row">
                  <label for="email">Email:</label><input type="email" id="email" name="email" placeholder="example@mail.com">
                </div>
                <div class="form-row">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default {
    name: 'network',
  }
</script>

<style lang="scss" scoped>
  @import '../css/settings';

  .d-flex {
    display: flex;
    align-items: center;
    justify-content: space-between;

    input {
      width: 49%;
    }
  }
  .form-row button {
    color: #EEBC57;
    padding: 1em 2.8em;
    border-radius: 4px;
    text-transform: capitalize;
    cursor: pointer;
    font-size: 18px;
    border: solid 1px #EEBC57;
    cursor: pointer;
  }

  @media (max-width: 680px) {
    .d-flex {
      flex-flow: row wrap;

      input {
        width: 100%;
        margin-bottom: 1.6em;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
</style>

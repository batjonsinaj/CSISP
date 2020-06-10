<!-- App.vue buefy navbar of all tabs-->
<!-- Preloading colour type settings-->
<template>
    <div>
        <b-navbar class="is-second navbar">
            <template slot="brand">
            </template>
            <template slot="start">
                <b-navbar-item tag="router-link" :to="{ path: '/' }">Welcome</b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ path: '/homePage' }">Home</b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ path: '/Leaderboard' }">Leaderboard</b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ path: '/aboutUS' }">About us</b-navbar-item>
            </template>
            <template slot="end">
            </template>
        </b-navbar>
        <br />
        <transition name="fade">
            <router-view></router-view>
        </transition>
    </div>
</template>

<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #21779B;
$primary-invert: findColorInvert($primary);
$twitter: #21779B;
$twitter-invert: findColorInvert($twitter);

$first: #21779B;
$first-invert: findColorInvert($first);
$second: #21779B;
$second-invert: findColorInvert($second);
$third: #21779B;
$third-invert: findColorInvert($third);
// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
  "white": ($white, $black),
  "black": ($black, $white),
  "light": ($light, $light-invert),
  "dark": ($dark, $dark-invert),
  "primary": ($primary, $primary-invert),
  "info": ($info, $info-invert),
  "success": ($success, $success-invert),
  "warning": ($warning, $warning-invert),
  "danger": ($danger, $danger-invert),
  "twitter": ($twitter, $twitter-invert),
  "first": ($first, $first-invert),
  "second": ($second, $second-invert),
  "third": ($third, $third-invert)
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Navbar height
$navbar-item-img-max-height: 3rem !important;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

// Classes
.container {
  padding: 50px;
  background-color: #5E2371;
  border-radius: 25px;
}

.home-header {
  color: white;
  font-size: 40px;
  font-weight: 1000;
}

.home-second {
  color: white;
  font-size: 30px;
  font-weight: 1000;
}

body {
  background-color: #5E2371;
  background-size: 100%;
  height: 1200px;
}

</style>

<script>
export default {
    data() {
        return {
            transactions: []
        }
    }, created(){
        let uri = 'http://localhost:4000/transactions';
        this.axios.get(uri).then(response => {
            this.transactions = response.data;
        });

        uri = 'http://localhost:4000/currencies/initializeAll';
        this.axios.post(uri).then(() => {
            console.log("Currencies initialized!");
        });

    },
  
};
</script>
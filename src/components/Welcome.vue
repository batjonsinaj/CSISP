<template>
  <div id = "all">
    </b-modal>
    <section>
      <div id = "carousel">
        <b-carousel
            :arrow="arrow"
            :animated="animated"
            :autoplay="autoPlay"
            :pause-hover="pauseHover"
            :pause-info="pauseInfo"
            :pause-info-type="pauseType"
            :interval="interval">
            <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
                <section :class="`hero is-medium is-${carousel.color} is-bold`">
                    <div class="hero-body has-text-centered">
                        <h1 class="title">{{carousel.text}}</h1>
                    </div>
                </section>
            </b-carousel-item>
        </b-carousel>
      </div>
    </section>
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-8">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-second">
              <p class="title">Number 1 most addicting game in the world!</p>
              <p class="subtitle"><br>With over 80 million vists on our website!.</p>
            </article>
            <article class="tile is-child notification is-second">
              <p class="title">Play up to 15 thumbnails!</p>
              <p class="subtitle"><br>15 thumbnails are generated for you to choose from!</p>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-second">
              <p class="title">Confused? Just click on the video!</p>
                 <video width="320" height="240" controls>
     <source src=”http://techslides.com/demos/sample-videos/small.ogv” type=video/ogg>
      <source src="https://www.youtube.com/results?search_query=thumbnail+game&page=&utm_source=opensearch" 
      type=video/mp4>
      </video>
              <figure class="image is-4by3">
              </figure>
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-second">
            <p class="title">Not for profit.</p>
            <p class="subtitle"><br>To support other independent websites and programmers, we have made this game non for profit, excluding all ads and forms of microtransactions as a way to to give our fans the best experience.</p>
            <div class="content">
            </div>
          </article>
        </div>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-second">
          <div class="content">
            <p class="title">How does it work?</p>
            <p class="subtitle"><br> We have collected over 100 different thumbnails from youtube videos, and we generate them to you. You will see two thumbnails, and click whichever thumnail you are most likely to watch if was on youtube. At the end, a response will show up with the video links of all the thumbnails you clicked. </p>
            <p class="subtitle"><br> Log in with your username and see where you rank on the leaderboard for how many thumbnails you've clicked that have been clicked by others. </p>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>

    export default {
        data() {
            return {
                isImageModalActive: true,
                arrow: false,
                animated: 'slide',
                autoPlay: false,
                pauseHover: true,
                pauseInfo: true,
                pauseType: 'is-third',
                interval: 2200,
                carousels: [
                { text: 'Welcome to the thumbnail game!', color: 'first' },

            ]
          }
        }
    }
</script>
<style>
  .carousel{
    margin-bottom: 25px;
  }
  #all{
    margin:10px;
  }
</style>
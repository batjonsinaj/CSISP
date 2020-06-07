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
              <p class="title">What is the thumbnail game?</p>
              <p class="subtitle"><br>With over 80 million vists on our website and on generating over 100,000 visits almost biweekly on our website, the thumbnail game is a take on the psycology of youtube views. We wanted to understand why many youtube videos are randomly recomennded and gather millions of views while being seemingly unknown. The response was to make the thumbnail game which gathers the thumbnails of popular videos and we see which thumbnail players would choose.  </p>
            </article>
            <article class="tile is-child notification is-second">
              <p class="title">Play up to 15 thumbnails!</p>
              <p class="subtitle"><br>15 thumbnails are generated for you to choose from! Our program generates 15 random youtube thumbnails for you to choose from and click on which you would watch. This is a way of testing why specific videos on youtube get recomennded on your timeline and gather millions of views. We can see that the thumbnail of a video is enough to draw people in to click on the video.</p>
            </article>
          </div>
  
              <figure class="image is-4by3">
              </figure>
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-second">
            <p class="title">How does it work?</p>
            <p class="subtitle"><br>We have collected over 100 different thumbnails from youtube videos, and we generate them to you. You will see two thumbnails, and click whichever thumnail you are most likely to watch if was on youtube. A response will show up with the video links of all the thumbnails you clicked. In the form of a ranking alogrithm, you get to see and compare yourself to what other thumbnails players have clicked on. </p>
            <div class="content">
            </div>
          </article>
        </div>
      </div>
      
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
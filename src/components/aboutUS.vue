<template>
  <div>
   <div class = "columns">
      <div class = "column">
      <p class="title is-0.5" text-align = "middle">About Us</p>
     <div class="card"> 
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://qph.fs.quoracdn.net/main-thumb-146581994-200-gqxqhatsnmwtnvvmdseobkqjvfiylmnw.jpeg" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="https://cdn1.edsby.com/cp1/d35e9a81fa3f261c542b899a0455d95700a9" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">Batjon Sinaj</p>
        <p class="subtitle is-6">@Bsinaj@bayviewglen.ca</p>
      </div>
    </div>
    <div class="content">
      3rd year MIT computer science student.  
      Skilled in CSS, Javascript, Java and Python. <a></a>
      <a href="#">#css</a> <a href="#">#HTML</a>
      <br>
    </div>
  </div>
</div>
    <article class="tile is-child notification is-first">
                <p class="title">Have a question for Batjon?</p>
                Write your email down and i'll message you as soon as i can! <a @click.prevent='BatjonSinaj()'>Click here.</a><br>
              </article>
      </div>
      <div class = "column">
         <div class="tile is-ancestor">
            <div class="tile is-vertical is-10">
               <div class="tile">
                  <div class="tile is-parent is-vertical">
                     <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://cdn1.edsby.com/cp1/0b9453d7243017d9a74736be667c20cd3fba" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="https://cdn1.edsby.com/cp1/0b9453d7243017d9a74736be667c20cd3fba" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">Abtin Abbaspour</p>
        <p class="subtitle is-6">@Aabbaspour@bayviewglen.ca</p>
      </div>
      
    </div>

    <div class="content">
      Mechanical engineering student 2nd year MIT.
      Skilled in physics, engineering and CSS <a></a>.
      <a href="#">#css</a> <a href="#">#Engineering</a>
      <br>
    </div>
  </div>
  </div>   
   <article class="tile is-child notification is-first">
                <p class="title">Have a question for Abtin?</p>
                Write your email down and i'll message you as soon as i can! <a @click.prevent='BatjonSinaj()'>Click here.</a><br>
              </article>
                        <div class="content">
                           <br>
                        </div>
                     </article>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
     <hr>
    <article class="tile is-child notification is-first">
      <p class="title">The backstory....</p>
      <p class="body">We met on the MIT campus and decided to work together to make a interent sensation. We did the science on how Youtube thumbnails generate millions of clicks, and figured that we could prove this law of attraction on making a game that would make people click on whichever thumbnail they are most interested in.</a></p>
    </article>
</div>
</template>
<script>
export default {

    created() {
        let uri = 'http://localhost:4000/transactions';
        this.axios.get(uri).then(response => {
            this.transactions = response.data;
        });

        uri = 'http://localhost:4000/currencies/';
        this.axios.get(uri).then(response => {
            this.currencies = response.data;
        });
    },
   
}
</script>

<style>
#image{
  width: 500px;
   margin-left: 70px;
}
#image2{
   margin-top:10px;
   margin-right:60px;
   float:right;
   width: 700px;
}
</style>
<template>
  <div>
    <article class="tile is-child notification is-second">
      <p class="title aboutUs">About Us</p>
      <p class="aboutUs">We are a pair of Computer Science students from Bayview Glen Independent School. For our ICS4U summative assignment, we decided to create a game using the MEVN stack</p>
      <br><br>
      <p class="title aboutUs">How Does The Game Work?</p>
      <p class="aboutUs">The user is given two random thumbnails from a list of youtube videos that can be uploaded, the user then chooses which thumbnail they would click on, ranking all the thumbnails from most likely to get clicked on to least likely, giving valuable information to content creators</p>
    </article>
     <hr>
    <article class="tile is-child notification is-first">
      <p class="title">The backstory....</p>
      <p class="body">We met at Bayview Glen Independent School and decided to work together to make a interent sensation. We did the science on how Youtube thumbnails generate millions of clicks, and figured that we could prove this law of attraction on making a game that would make people click on whichever thumbnail they are most interested in.</p>
    </article>
    <br><br><br><br><br><br><br><br><br><br>
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
.aboutUs{
  text-align: center;
  font-size: 24px;
  padding-left: 300px;
  padding-right: 300px;
}
.title{
  font-size: 40px;
}
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
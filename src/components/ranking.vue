<!--Information about transaction: type of transaction, the amount involved, the date of transaction, and the balance after -->
<template>
  <section>
    <br>
    <b-button tag="router-link"
      to="/homePage"
      type="is-second" size = "is-large" id = "homebutton">
      <strong>Home</strong> 
    </b-button>
    <b-button @click="deleteAll()"
      type="is-danger" size = "is-large" id = "homebutton">
      <strong>Delete All</strong> 
    </b-button>
    <p id = "title">Ranking</p>
    <p id = "body">The thumbnails have been organized with the ones most likely to be clicked at the top<br>If you do not see any thumbnails, try <a href="http://localhost:8080/upload">uploading some.</a></p>
    <br><br>
    <ul>
      <li v-for="thumbnail in data" :key="thumbnail.img">
        <!--<div class="urlList">{{thumbnail.url}}</div>-->
        <div class="imgList"><img v-bind:src="`${thumbnail.img}`" width="640px" @click="openPage(thumbnail.url)"></div>
      </li>
    </ul>
    <hr>
   
  </section>
</template>
<script>
export default {

    data() {
        return {
          data: ""
        }
    },
    created() {
      let uri = 'http://localhost:4000/thumbnails/thumbnaillist';
            this.axios.get(uri)
              .then((res) => {
                this.data = res.data;
                if (data !== undefined) {
                  function compareRank(a, b){
                    // a should come before b in the sorted order
                    if(a.rank < b.rank){
                      return -1;
                    // a should come after b in the sorted order
                    }else if(a.rank > b.rank){
                      return 1;
                    // a and b are the same
                    }else{
                      return 0;
                    }
                  }
                  console.log(data.sort(compareRank));
                } else {
                  console.log("success");
                }
              })
              .catch((error) => {
                console.log(error);
              });
    },
    methods: {
      openPage(url){
        window.open(url);
      },
      deleteAll(){
        let uri = `http://localhost:4000/thumbnails/deleteAll`;
        this.axios.delete(uri).then(()=>{
          console.log("All thumbnails have now been deleted");
        })
        .catch((error) => {
          console.log(error);
        });
        location.reload();
      }
    }
}
</script>
<style>
  .column{
    margin: 20px;
  }
  .imgList{
    text-align: center;
    margin-bottom: 40px;
  }
  .urlList{
    text-align: center;
  }
  #title{
    font-size: 50px;
    font-weight: bold;
    text-align: center;
    margin-right: 400px;
  }
  #body{
    font-size: 20px;
    font-weight: bold;
    text-align: center;
  }
  #homebutton{
    float:left;
    margin-left: 35px;
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

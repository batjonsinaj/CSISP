<!--Information about transaction: type of transaction, the amount involved, the date of transaction, and the balance after -->
<template>
  <section>
    <div class="container">
        <p id = "title">Upload A Thumbnail</p>
        <div class="columns">
            <div class="column">
                <br>
                <b-field id="urlBox" type="is-second" size="is-large" label="URL">
                    <b-input v-model="url"></b-input>
                </b-field>
                <b-button class="myButton" type="is-second" size="is-large" @click="uploadImage()" expanded>Upload Photo</b-button>
                <br><br>
            </div>
            <div class = "column">
                <br>
                <div id="image"><img src="https://miro.medium.com/max/2738/1*PPud-Z83-82NSwvzV9dnlg.png" width="640px"></div>
                <br><br>
		    </div>
        </div>
        <hr>
    </div>
  </section>
</template>
<script>
export default {

    data() {
        return {
            url: ""
        }
    },
    created() {
        //console.log(document.getElementById('image'));
        //document.getElementById('image').src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSfroRCbvHkn4i7UDG19UfXYfzeTj4ExqpjcelXTpFVdo5a_oSL&usqp=CAU";
    },
    methods: {
        uploadImage(){
            console.log(document.getElementById('image'));
            let videoId = this.url.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop();
            let img = 'http://img.youtube.com/vi/' + videoId + '/maxresdefault.jpg';
            document.getElementById('image').innerHTML = '<img src="http://img.youtube.com/vi/' + videoId + '/maxresdefault.jpg" width="640px"/>';
            let uri = 'http://localhost:4000/thumbnails/create';
                this.axios.post(uri, {"url":this.url, "img":this.img, "rank":100})
                .then((res) => {
                    let data = res.data.errmsg;
                    if (data !== undefined) {
                        console.log(data);
                    } else {
                        console.log("success");
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
}
</script>
<style>
  .column{
    margin: 20px;
  }
  .myButton{
    text-align: center;
    justify-content: center;
  }
  #title{
    font-size: 50px;
    font-weight: bold;
    text-align: center;
    margin-left: 140px;
  }
  #image{
    width: 500px;
    margin-left: 70px;
  }
  #urlBox{
    padding-left: 0.75em;
  }
</style>

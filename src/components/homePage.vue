<!-- Multi-column layout - the left consists of viewing the balance, transaction action options, and contact information + overview,
the right consists of a list of transactions imported from the DB, similar to the post list -->
<template>
	<div id="box">
		<p id = "title">Thumbnail Game!</p>
		<p class="aboutUs">The game is simple! Just click on whichever thumbnail you find interesting. To learn more, visit our <a href="http://localhost:8080/aboutUs">about us</a> page.<br>Click the Play button to begin!</p>
      <br><br>
	  <div id="playButton"><b-button class="myButton" type="is-second" size = "is-large" @click="play()">Play</b-button></div>
	<div class = "columns">
		<div class = "column">
			<img id="imageLeft" src="https://media.wired.com/photos/5932bf65a30e27707249ad43/master/pass/bluewhalepoop1.jpg" width="640px">
		</div>
		<div class = "column">
			<img id="imageRight" src="https://www.ocregister.com/wp-content/uploads/2019/05/0504_NWS_OCR-L-PADDLEWHALE-0504102-1.jpg" width="640px">
		</div>	
	</div>
	<br><br><br><br><br><br>
		<b-tooltip label = "Check out the thumbnail rankings." type="is-warning">
			<b-button class = "myButton" type="is-second" size = "is-large" @click="ranking()">Ranking</b-button>
		</b-tooltip>
		<b-tooltip label = "Come and learn more about the creators." type="is-warning">
			<b-button class = "myButton" type="is-second" size = "is-large" @click="aboutUs()">About us</b-button>
		</b-tooltip>
	</div>
</template>
<script>
export default {
    data() {
        return {
			data: ""
        }
    },
    created() {
        
    },
    methods: {
		update(url, newRank){
			console.log("updating");
			let uri = 'http://localhost:4000/thumbnails/update';
            this.axios.post(uri, {"url":url, "newRank":newRank})
              .then((res) => {
                let data = res.data.errmsg;
                if (data !== undefined) {
                  console.log(data);
                } else {
                  console.log("updated ranks");
                }
              })
              .catch((error) => {
                console.log(error);
              });
		},
		play(){
			document.getElementById('playButton').style.display = 'none';
			let uri = 'http://localhost:4000/thumbnails/thumbnaillist';
            this.axios.get(uri)
              .then((res) => {
                this.data = res.data;
                if (this.data !== undefined) {

					function displayImages(data, parent) {
						//console.log(parent);
						let indexLeft = Math.floor(Math.random()*data.length);
						let indexRight = Math.floor(Math.random()*data.length);
						while(indexLeft === indexRight) {
							indexRight = Math.floor(Math.random()*data.length);
						}
						let leftUrl = data[indexLeft].url;
						let rightUrl = data[indexRight].url;
						document.getElementById("imageLeft").src=data[indexLeft].img;
						document.getElementById("imageRight").src=data[indexRight].img;
						document.getElementById("imageLeft").addEventListener("click",()=>{
							if (data[indexLeft].rank<data[indexRight].rank){
								parent.update(leftUrl, data[indexLeft].rank + Math.abs(data[indexLeft].rank-data[indexRight].rank));
								parent.update(rightUrl, data[indexRight].rank - Math.abs(data[indexLeft].rank-data[indexRight].rank));
								displayImages(data, parent);
							} else if (data[indexLeft].rank>data[indexRight].rank) {
								parent.update(leftUrl, data[indexLeft].rank + (Math.abs(data[indexLeft].rank-data[indexRight].rank))/2);
								parent.update(rightUrl, data[indexRight].rank - (Math.abs(data[indexLeft].rank-data[indexRight].rank))/2);
								displayImages(data, parent);
							} else {
								parent.update(leftUrl, data[indexLeft].rank + 1);
								parent.update(rightUrl, data[indexRight].rank - 1);
								displayImages(data, parent);
							}
						});
						document.getElementById("imageRight").addEventListener("click",()=>{
							if (data[indexRight].rank<data[indexLeft].rank){
								parent.update(rightUrl, data[indexRight].rank + Math.abs(data[indexRight].rank-data[indexLeft].rank));
								parent.update(leftUrl, data[indexLeft].rank - Math.abs(data[indexRight].rank-data[indexLeft].rank));
								displayImages(data, parent);
							} else if (data[indexRight].rank>data[indexLeft].rank) {
								parent.update(rightUrl, data[indexRight].rank + (Math.abs(data[indexRight].rank-data[indexLeft].rank))/2);
								parent.update(leftUrl, data[indexLeft].rank - (Math.abs(data[indexRight].rank-data[indexLeft].rank))/2);
								displayImages(data, parent);
							} else {
								parent.update(rightUrl, data[indexRight].rank + 1);
								parent.update(leftUrl, data[indexLeft].rank - 1);
								displayImages(data, parent);
							}
						});
					}

					displayImages(this.data, this);
					document.getElementById('playButton').style.display = 'initial';
                } else {
                  console.log("there are no thumbnails");
                }
              })
              .catch((error) => {
                console.log(error);
			  });
		},
		aboutUs(){
			window.location.href = "http://localhost:8080/aboutUs";
		},
		ranking(){
			window.location.href = "http://localhost:8080/ranking";
		}
    }
}
</script>
<style>
	.message{
		background-color: #9a841c;
	}
	.columns{
		margin-left:8px;
		margin-right: 8px;
	}
	.myButton{
		margin:10px 13px;
	}
	#box{
		text-align: center;
	}
	th{
		width:100px;
	}
</style>
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
			validCombos: [],
			data: ""
        }
    },
    created() {
        
    },
    methods: {
		update(url, newRank){
			console.log("ur in");
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
					console.log(this.data.sort(compareRank));
					this.validCombos = new Array(this.data.length*(this.data.length-1)/2);
					var i, j;
					let index = 0;
					for(i = 0; i < this.data.length; i++){
						for(j = i + 1; j < this.data.length; j++){
							this.validCombos[index] = new Array(2);
							this.validCombos[index].push(this.data[i].url);
							this.validCombos[index].push(this.data[j].url);
							index++;
						}
					}
					console.log(this.validCombos);
					function displayImages(data, validCombos, parent) {
						console.log(this);
						let indexLeft = Math.floor(Math.random()*data.length);
						let indexRight = Math.floor(Math.random()*data.length);
						while(indexLeft === indexRight) {
							indexRight = Math.floor(Math.random()*data.length);
						}
						let displayable = false;
						var i;
						for(i = 0; i<validCombos.length; i++){
							if((validCombos[i][2] === data[indexLeft].url && validCombos[i][3] === data[indexRight].url) || (validCombos[i][3] === data[indexLeft].url && validCombos[i][2] === data[indexRight].url)){
								displayable = true;
								validCombos.splice(i, 1);
								console.log(data[indexLeft].img);
								console.log(data[indexRight].img);
								let leftUrl = '"'+data[indexLeft].url+'"';
								let rightUrl = '"'+data[indexRight].url+'"';
								document.getElementById("imageLeft").src=data[indexLeft].img;
								document.getElementById("imageRight").src=data[indexRight].img;
								document.getElementById("imageLeft").addEventListener("click",()=>{
									parent.update(leftUrl, 150);
								});
								document.getElementById("imageRight").addEventListener("click",()=>{
									parent.update(rightUrl, 150);
								});
								//document.getElementById('imageLeft').innerHTML = '<img src="' + data[indexLeft].img + '" width="640px" @click="update(' + leftUrl + ', 150)"/>';
								//document.getElementById('imageRight').innerHTML = '<img src="' + data[indexRight].img + '" width="640px" @click="update(' + rightUrl + ', 150)"/>';
							}
						}
						return validCombos;
					};
					this.validCombos = displayImages(this.data, this.validCombos, this.methods);
					console.log(this.validCombos);
					//document.getElementById('playButton').style.display = 'initial';
                } else {
                  console.log("there are no thumbnails");
                }
              })
              .catch((error) => {
                console.log(error);
			  });
		},
		displayImages(){
			let indexLeft = Math.random()*this.data.length();
			console.log(indexLeft);
			//document.getElementById('imageLeft').innerHTML = '<img src="http://img.youtube.com/vi/' + videoIdLeft + '/maxresdefault.jpg" width="640px"/>';
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
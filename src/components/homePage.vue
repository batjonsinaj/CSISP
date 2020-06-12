<!-- Multi-column layout - the left consists of viewing the balance, transaction action options, and contact information + overview,
the right consists of a list of transactions imported from the DB, similar to the post list -->
<template>
	<div class = "columns">
		<div class = "column">
			<b-button type="is-second" size = "is-large" expanded>Game</b-button>
			<br><br>   		
			<b-tooltip label = "Check out your leaderboard score." type="is-warning">
				<b-button class = "myButton" type="is-second" size = "is-large" @click="update()">Leaderboard</b-button>
			</b-tooltip>
			<b-tooltip label = "Come and learn more about the creators." type="is-warning">
				<b-button class = "myButton" type="is-second" size = "is-large" @click="update()">About us</b-button>
			</b-tooltip>
			<br>

		</div>
		<div class = "column">
			<b-button type="is-second" size = "is-large" expanded>Gameboard</b-button>
		</div>
	</div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    created() {
        
    },
    methods: {
		update(){
			let uri = 'http://localhost:4000/thumbnails/update';
            this.axios.post(uri, {"url":"https://www.youtube.com/watch?v=E-TWCH_O1cw", "rank":150})
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
	th{
		width:100px;
	}
</style>
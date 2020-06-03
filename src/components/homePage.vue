<!-- Multi-column layout - the left consists of viewing the balance, transaction action options, and contact information + overview,
the right consists of a list of transactions imported from the DB, similar to the post list -->
<template>
	<div class = "columns">
		<div class = "column">
			<b-button type="is-second" size = "is-large" expanded>Game</b-button>
			<b-button type="is-first" size = "is-large" v-for="(transaction,index) in transactions.slice().reverse()" :key="transaction._id" v-if="index===0" expanded>${{transaction.balanceAfter}} CAD</b-button><!-- Taking the balanceAfter of the most recent transaction (that's current balance), if no transactions then no recent balanceAfter, then just $0.00 -->
			<br><br>   		
			<b-tooltip label = "Check out your leaderboard score." type="is-warning">
				<b-button class = "myButton" type="is-second" size = "is-large" @click.prevent="leaderboard()">Leaderboard</b-button>
			</b-tooltip>
			<b-tooltip label = "Come and learn more about the creators." type="is-warning">
				<b-button class = "myButton" type="is-second" size = "is-large" @click.prevent="aboutUS()">About us</b-button>
			</b-tooltip>
			<br>

		</div>
		<div class = "column">
			<b-button type="is-second" size = "is-large" expanded>Gameboard</b-button>
			<table class="table table-hover has-text-white has-background-first" style="width: 780px">

				<tbody><!-- the .slice().reverse() allows for viewing most recent to least recent transactions -->
					<tr v-for="transaction in transactions.slice().reverse()" :key="transaction._id">
						<td>{{ transaction.transactionType }}</td>
						<td>${{ transaction.amount}} CAD</td>
						<td>{{ transaction.date }}</td>
						<td><!-- to view more information can press here -->
							<router-link :to="{name: 'viewer', params: { id: transaction._id }}" class="btn btn-primary has-text-third" >View Details</router-link>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
<script>
export default {
    data() {
        return {
            transactions: [],
            balance: 0
        }
    },
    created() {
        let uri = 'http://localhost:4000/transactions';
        this.axios.get(uri).then(response => {
            this.transactions = response.data;
        });
    },
    methods: {
        leaderboard() {
            this.$router.push({
                name: 'leaderboard'
            });
        },
        aboutUS() {
            this.$router.push({
                name: 'About Us'
            });
        },
 
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
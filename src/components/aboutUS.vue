<!-- Same as deposit page but money removed instead of added (still adding a transaction) -->
<template>
  <div>
   <div class = "columns">
      <div class = "column">
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
      3rd year MIT computer science student Batjon Sinaj
      Skilled in CSS, Javascript, Java and Python. <a></a>.
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
    data() {
        return {
            transactions: [],
            transaction: {
                transactionType: "Withdraw",
                eTransferTo: "",
                date: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate()
            },
            currency: "$CAD",
            currencies: []
        }
    },
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
    methods: {
        BatjonSinaj() {
            this.$buefy.dialog.prompt({
                message: `Leave your email here:`,
                trapFocus: true,
                onConfirm: (value) => this.$buefy.toast.open(`Thanks, i'll try to get to you as soon as possible!`)
            })
        },
        withdraw() {//1. check that there was specified amount, 2. format it and convert currency, 3. make sure have the money and at least $10, 4. figure out balanceAfter and then add it as a transaction, go to the home page
            if (this.transaction.amount === undefined || this.transaction.amount === null) {
                this.$buefy.snackbar.open(`Action failed - please submit a value.`);
                return;
            }
            this.transaction.amount = parseFloat(this.transaction.amount).toFixed(2);
            this.transaction.amount = parseFloat(this.convertToCAD()).toFixed(2);
            if (this.transactions.length === 0) {
                this.$buefy.snackbar.open(`Action failed - you have no balance in your account to withdraw.`);
                return;
            } else if (parseFloat(this.transaction.amount) > parseFloat(this.transactions[this.transactions.length - 1].balanceAfter)) {
                this.$buefy.snackbar.open(`Action failed - you do not have $` + parseFloat(this.transaction.amount).toFixed(2) + ` balance in your account to withdraw.`);
                return;
            } else if (parseFloat(this.transaction.amount) < 10) {
                this.$buefy.snackbar.open(`Action failed - the minum withdraw value is $10.`);
                return;
            } else {
                this.transaction.balanceAfter = (parseFloat(this.transactions[this.transactions.length - 1].balanceAfter) - parseFloat(this.transaction.amount)).toFixed(2);
                let uri = 'http://localhost:4000/transactions/add';
                this.axios.post(uri, this.transaction).then(() => {
                    this.$router.push({
                        name: 'homePage'
                    });
                });
            }
        },
        convertToCAD() {
          for(var c of this.currencies){
            if(this.currency === c.name)
              return this.transaction.amount * c.value;
          }
          throw "Could not find specified currency: " + this.currency;
        }
    }
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
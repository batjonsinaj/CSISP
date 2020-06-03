<!--Information about transaction: type of transaction, the amount involved, the date of transaction, and the balance after -->
<template>
  <section>
    <br>
    <b-button tag="router-link"
      to="/homePage"
      type="is-second" size = "is-large" id = "homebutton">
      <strong> Home</strong> 
    </b-button>
    <p id = "title">Leaderboard</p>
    <br><br>
    <div class = "columns">
      <div class = "column">
        <b-message title="Transaction Type" type = "is-second has-background-first" size = "is-medium" aria-close-label="Close message">
          <!--Only if this is an e-transfer, you can view who the transaction was to-->
          <p v-if = 'transaction.eTransferTo !== ""'>This transaction was an {{transaction.transactionType}} to {{transaction.eTransferTo}}. </p>
          <p v-else>This transaction was a {{transaction.transactionType}}.</p>
        </b-message>
        <b-message title="Amount" type="is-second has-background-first" size = "is-medium" aria-close-label="Close message">
          The amount of money involved in this transaction was ${{transaction.amount}} CAD.
        </b-message>
      </div>
      <div class = "column">
        <b-message title="Date" type="is-second has-background-first" size = "is-medium" aria-close-label="Close message">
          This transaction was conducted on {{transaction.date}}.
        </b-message>
        <b-message title="Remaining Balance" type="is-second has-background-first" size = "is-medium" aria-close-label="Close message">
          Following this transaction, you had ${{transaction.balanceAfter}} CAD balance remaining.
        </b-message>
      </div>
    </div>
    <hr>
   
  </section>
</template>
<script>
export default {

    data() {
        return {
            transaction: {}
        }
    },
    created() {
        let uri = `http://localhost:4000/transactions/edit/${this.$route.params.id}`;
        this.axios.get(uri).then((response) => {
            this.transaction = response.data;
        });
    }
}
</script>
<style>
  .column{
    margin: 20px;
  }
  #title{
    font-size: 50px;
    font-weight: bold;
    text-align: center;
    margin-right: 140px;
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

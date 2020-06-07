<!--Information about transaction: type of transaction, the amount involved, the date of transaction, and the balance after -->
<template>
  <section>
    <br>
    <b-button tag="router-link"
      to="/homePage"
      type="is-second" size = "is-large" id = "homebutton">
      <strong> Home</strong> 
    </b-button>
    <p id = "title">Ranking</p>
    <br><br>
    
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

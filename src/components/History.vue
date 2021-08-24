<template>
  <h3>History</h3>
  <div class="history">
      <p v-for="(data, index) in history" :key="index" :class="activeIndexes(value).includes(index) && 'active'">{{data}}</p>
  </div>
  <input type="number" placeholder="Search Number" v-model="value">
</template>

<script>
import {mapGetters, mapState} from 'vuex'

export default {
    data(){
        return{
            value:0
        }
    }
    ,
    computed:{
        ...mapState(["history"]),
        ...mapGetters(["activeIndexes"]),
    }
}
</script>

<style>
    h3{
        margin-top: 20px;
    }
    .history{
        display: grid;
        width:50%;
        margin: auto;
        grid-template-columns: repeat(6, 1fr);
    }
    input{
        padding: 5px;
    }
    .active{
        font-weight:900
    }
</style>

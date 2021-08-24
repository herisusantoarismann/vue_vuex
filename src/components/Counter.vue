<template>
    <h1>Mini Vuex Project</h1>
    <div>
        <span>{{counter}}</span>
    </div>
    <button @click="decrement(value)">-</button>
    <input type="number" class="valueBox" v-model="value"/>
    <button @click="increment(value)">+</button>
    <div class="randomNumber">
        <button @click="addRandomNumber()">Add Random Number</button>
    </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'

export default {
    data(){
        return{
            value:10,
        }
    },
    computed:{
        ...mapState(["counter"]),
    }
    ,
    methods:{
        ...mapMutations(["increment", "decrement"]),
        ...mapActions(["addRandomNumber"]),
    }
}
</script>

<style>
    span{
        font-size:3rem;
    }
    .valueBox{
        margin: 10px 20px;
        text-align: center;
        padding: 2px;
    }
    button{
        border-radius:12px;
        border-style: none;
        cursor:pointer;
        padding: 5px 10px;
    }
    .randomNumber{
        margin-top: 5px;
    }
    .randomNumber > button{
        background-color:seagreen;
        color:#fff
    }
</style>

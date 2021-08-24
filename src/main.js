import { createApp } from 'vue'
import App from './App.vue'

import {createStore} from 'vuex';
import axios from 'axios'

const store = createStore({
    state:{
        counter:0,
        history: [0]
    },
    mutations:{
        increment(state, payload){
            state.counter+= payload;
            state.history.push(payload);
        },
        decrement(state, payload){
            state.counter-= payload;
            state.history.push(payload);
        }
    },
    actions:{
        async addRandomNumber(context){
            const number = await axios.get("https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new");
            context.commit("increment", number.data);
        }
    },
    getters:{
        activeIndexes: (state) => (payload) => {
            let indexes = [];
            state.history.forEach((number, index) => {
                if(number === payload){
                    indexes.push(index);
                }
            });

            return indexes;
        }
    }
})

const app = createApp(App)

app.use(store).

mount('#app')

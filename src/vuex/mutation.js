const mutations = {
    increment(state, payload){
            state.counter+= payload;
            state.history.push(payload);
    },
    decrement(state, payload){
            state.counter-= payload;
            state.history.push(payload);
    }
}

export default mutations;
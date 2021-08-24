const getters = {
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

export default getters;
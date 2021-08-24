import axios from "axios";

const actions = {
    async addRandomNumber(context){
        const number = await axios.get("https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new");
        context.commit("increment", number.data);
    }
}

export default actions;
import axios from "axios";

const BASE_URL='http://localhost:8080/scores';

class Service{
    getAllScores(){
        return axios.get(BASE_URL)
    }

    getTopScores(){
        return axios.get(BASE_URL + '/top')
    }

    addScore = async(score) => {
        let data = await axios.post(BASE_URL, score)
        .then(data => data.data);
        return JSON.stringify(data);
    }
}

export default new Service();
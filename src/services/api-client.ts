import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "d83ee8282df64325a95748940af2d2b4"

    }

})
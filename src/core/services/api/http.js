import axios from "axios";

const http = axios.create({
    baseURL: 'https://sepehracademy.liara.run',
});

export default http;
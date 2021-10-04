import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID -8a4PKIh5tfsUMPcIMR3gWK1qgCW73aXBFuETxeQ-x0",
  },
});

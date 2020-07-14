import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=200&nat=u";

export default {
  search: () => {
    axios.get(BASEURL);
  },
};

import axios from 'axios';

export default function getUserInfo(){
    return axios.get(`http://api.github.com/users/sunzorro`)
    .then((res)=>({
      bio: res.data
    }));
  }

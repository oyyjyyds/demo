import axios from 'axios'

export function getData(id) {
  return axios.get(`https://api.kuleu.com/api/MP4_xiaojiejie?type=json&id=${id}`)
}
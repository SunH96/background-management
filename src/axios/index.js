import axios from 'axios'
import store from '@/store'
import router from '@/router'

let baseUrl = store.state.baseUrl
let token = window.localStorage.getItem('token')
const http = axios.create({
    baseURL: baseUrl,
    timeout: 10000,
    headers: {
        Authorization:'token',
        "Content-Type":'application/json'
    }
})

http.interceptors.request.use((config) => {

    return config
}, err => {
    return Promise.reject(err)
})

http.interceptors.response.use((res) => {
    if (res.data.code === 200) {

    } else if (res.data.code === 500) {

    }
    return res
}, err => {
    alert('这个服务可能正在维护，请您耐心等待！')
    return Promise.reject(err)
})

export {http}
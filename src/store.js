import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

axios.defaults.baseUrl = 'http://localhost:8081/api/';

let store = new Vuex.Store({
    modules:{},
    plugins:[],
    state : {
        token: '',
    },
    getters:{ 
        loggedIn(state){
            var accessToken = localStorage.getItem('access_token');
            if(accessToken){
                Vue.set(state, 'token', accessToken);
            }
            return (state.token ? true : false);            
        },        
    },
    mutations: {
        updateToken (state, token) {
            Vue.set(state, 'token', token);
        },
        retriveToken(state, token){
            Vue.set(state, 'token', token);
        },
        distroyToken(state){
            Vue.set(state, 'token', null);
        }


    },
    actions:{
        getToken(context, credentials) {
            console.log('get Token');   
            return new Promise((resolve, reject) => {
                axios.post('/login',{
                    email: credentials.email,
                    password: credentials.password,
                })
                .then(response => {
                    console.log(response);
                    const token = response.data.access_token
                    context.commit('updateToken',token)
                    localStorage.setItem('access_token', token)
                    
                    resolve(response)
                })
                .catch(error => {
                    console.log(error)
                    reject(error)
                })
            })
        },
        userRegister(context, credentials){
            return new Promise((resolve, reject) => {
                axios.post('/register', {
                    username : credentials.username,
                    newemail : credentials.newemail,
                    newpassword : credentials.newpassword
                })
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                })
            })
        },
        destroyToken(context){
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
            if(context.getters.loggedIn){
                let abc = localStorage.removeItem('access_token')
                context.commit('distroyToken')
            }
        },
        getUserList(context) {
            return new Promise((resolve, reject) => {
                axios.post('/getUserList')
                .then(response => {
                    //console.log(response);
                    resolve(response)
                })
                .catch(error => {
                    //console.log(error)
                    reject(error)
                })
            })
        },
    }
})
export default store
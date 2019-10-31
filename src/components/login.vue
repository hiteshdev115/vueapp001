<template>
   <article>
       <div class="container"> 
            <div class="login">
                <form class="sign-in">
                    <h2>Sign In</h2>
                    <div>Use your account</div>
                    <input type="email" placeholder="Email" v-model="email" name="email" id="email" class="form-control"/>
                    <input type="password" placeholder="Password" v-model="password" name="password" id="password" class="form-control"/>
                    <a href="#">Forgot Password?</a>
                    <button type="button" @click="loginAction">Sign In</button>
                </form>
            </div> 
       </div>
   </article>
</template>
<script>
//import axios from 'axios';

export default {
    data () {
		return {
            email:'',
            password:''
		}
    },
    created() {
        this.$store.subscribe((mutation, state) => {
            console.log("mutation type:-"+mutation.type);
        })
    },
    mounted() {
        //alert('home');
		jQuery('body').removeClass('is-menu-visible');
		//this.checklogin();
	},  
	methods: {
        loginAction(){
            console.log(this.email+"==="+this.password);
            //login action code here
            this.$store.dispatch('getToken',{
                email: this.email,
                password: this.password
            })
            .then(response => {
                console.log('get success');
                console.log(response);
                this.$router.push('/')
            })
        },
        /*async login (e) {
            console.log('submit');
            this.submitted = true;
            const { email, password } = this;
            if (email && password) {
               return axios.post('/login',{email,password})
                .then(res => {
                    console.log(res.data);
                    localStorage.setItem('token', res.data.data.token);
                    localStorage.setItem('uid', res.data.data.id);
                    this.$router.push('/');
                })
            }
        },
        async checklogin(){
            let toekn = localStorage.getItem('token');
            //console.log('====>'+val);
            if(toekn){
                this.$router.push('/');
            }
        }*/
    }
    
}
</script>

<style lang="scss" scoped>
    .container{
        position: relative;
        widows: 768px;
        height: 480px;
        overflow: hidden;
        border-radius: 10px;
        box-shadow: 0 15px 30px rgba(0, 0, 0, .0),
                    0 10px 10px rgba(0, 0, 0, .0);
        background: linear-gradient(to bottom,#5f1d1d54, rgba(189, 131, 131, 0.5));
    }
    h2{
        margin: 0;
    }
    p{
        margin: 20px 0 30px;
    }

    a{
        color: #222;
        text-decoration: none;
        margin: 15px 0;
        font-size: 1rem;
    }

    button{
        border-radius: 20px;
        border: 1px solid #0a0a0a;
        background-color: #000000;
        color: #fff!important;
        font-size: 1rem;
        font-weight: bold;
        letter-spacing: 1px;
        text-transform: uppercase;
        transition: transform .1s ease-in;
    }
    a:active{
        transform: scale(.9);
    }
    a:focus{
        outline: none;
    }

    button.invert{
        background-color: transparent;
        border-color: #fff;
    }

    form{
        
        top: 0;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        padding: 90px 60px;
        width: calc(50% - 120px);
        height: calc(100% - 180px);
        background: linear-gradient(to bottom, #ed8686, #97979733);
        transition: all .5s ease-in-out;
    }
    div{
        font-size: 1rem;
    }
    input{
        background-color: #eee;
        border: none;
        padding: 8px 15px;
        margin: 6px 0;
        width: calc(100% - 30px);
        border-radius: 15px;
        border-bottom: 1px solid #ddd;
        box-shadow: 0 1px 2px rgba(0, 0, 0, .4),
                    0 -1px, 1px #fff,
                    0 1px 0 #fff;
        overflow: hidden;
    }
    
    .sign-in{
        left: 0;
        z-index: 1;
        margin-left: auto;
        margin-right: auto;
    }
</style>
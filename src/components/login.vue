<template>
   <article>
       <div class="container"> 
            <div class="login">
                <form class="sign-in">
                    <h2>Sign In</h2>
                    <div>Use your account</div>
                    <div class="message">{{this.succMessage}}</div>
                    <input type="email" placeholder="Email" v-model="email" v-model.trim="$v.email.$model" name="email" id="email" class="form-control" :class="{ 'input-error': $v.email.$error }" data-email/>
                    <div class="error" v-if="!$v.email.required">Email is required</div>
                    <div class="error" v-if="!$v.email.email">Enter must be a valid</div>
                   
                    <input type="password" placeholder="Password" v-model="password" v-model.trim="$v.password.$model" name="password" id="password" class="form-control" :class="{ 'input-error': $v.password.$error }" data-password />
                    <div class="error" v-if="!$v.password.required">Password is required</div>
                    <div class="error" v-if="!$v.password.minLength">Name must have at least {{$v.password.$params.minLength.min}} letters.</div>
                    
                    <a href="#">Forgot Password?</a>
                    <button type="button" @click="loginAction">Sign In</button>
                </form>
            </div> 
       </div>
   </article>
</template>
<script>
//import axios from 'axios';
import { required, email, minLength, between } from 'vuelidate/lib/validators'

export default {
    data () {
		return {
            email:'',
            password:'',
            submitStatus: null,
            succMessage:''
		}
    },
    validations: {
        email: {
            required,
            email       
        },
        password: {
            required,
            minLength: minLength(4)
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
            console.log('submit!')
            this.$v.$touch()
            //login action code here
            if (this.$v.$invalid) {
                this.submitStatus = 'ERROR'
                console.log(this.submitStatus)
            } else {
                // do your submit logic here
                this.submitStatus = 'OK'
                this.$store.dispatch('getToken',{
                    email: this.email,
                    password: this.password
                })
                .then(response => {
                    console.log('get success');
                    console.log(response);
                    this.succMessage = "Login Successfully!";
                    //this.$router.push('/')
                })
            }
        },
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
    .error{
        color: red;
    }
    .input-error{
        border: 1px solid red;
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
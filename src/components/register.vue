<template>
    <div>
        <!-- Heading -->
			<div id="heading" >
				<h1>User Registration</h1>
			</div>

		<!-- Main -->
			<section id="main">
				<div>
					<div class="container"> 
							<div class="login">
								<form class="sign-in">
									<h2>Sign Up</h2>
									<div class="alert alert-success" role="alert">
                                        {{successMessage}}
                                    </div>
									<input type="text" placeholder="Name" v-model="username" name="username" id="username" class="form-control" validate="'required|min:4'"/>
                                    <input type="email" placeholder="Email" v-model="newemail" name="newemail" id="newemail" class="form-control" validate="'required|min:4'"/>
								
									<input type="password" placeholder="Password" v-model="newpassword" name="newpassword" id="newpassword" class="form-control" validate="'required|min:4'"/>.
								
									<button type="button" @click="registerAction">Sign Up</button>
								</form>
							</div> 
					</div>
				</div>
			</section>
    </div>
</template>
<script>
export default {
	name:'register',
	data() {
		return{
            username:'',
			newemail : '',
			newpassword: '',
			errors:'',
            serverErrors:'',
            successMessage:''
		}
	},
    mounted() {
		jQuery('body').removeClass('is-menu-visible');
	},
	methods: {
         registerAction() {
			this.$store.dispatch("userRegister", {
                username: this.username,
                newemail: this.newemail,
				newpassword: this.newpassword
			})
			.then(response => {
				this.successMessage = "Registered Successfully!"
				//this.$router.push({name:'register'})
				console.log('user registered')
			})
			.catch(error => {
				this.serverErrors = object.values(errors.data.error)
			})
		}
    }
}
</script>
<style lang="scss" scoped>
    .container{
        position: relative;
        overflow: hidden;
        width: 100%;
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
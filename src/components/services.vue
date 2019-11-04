<template>
    <div>
        <!-- Heading -->
			<div id="heading" >
				<h1>User List</h1>
			</div>

		<!-- Main -->
			<section id="main">
				<div class="inner">
					<div class="container"> 
							<div class="login">
								<form class="sign-in" @submit.prevent="validateSubmit">
									<h2>All Authenticated User List</h2>
									<table class="tbl">
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Password</th>
                                        <tr v-for="user in userList" :key="user.id">
                                            <td>{{user.username}}</td>
                                            <td>{{user.email}}</td>
                                            <td>{{user.password}}</td>
                                        </tr>
									</table>
								</form>
							</div> 
					</div>
				</div>
			</section>
    </div>
</template>
<script>
export default {
    name:'services',
    data(){
        return{
            userList : {}
        }
    },
    mounted(){
        this.getUserList();
    },
    methods: {
        getUserList(){
           this.$store.dispatch('getUserList')
            .then(response => {
                this.userList = response.data.userdetails
                console.log(response.data);                
            })
        },
    }
	
}
</script>
<style lang="scss" scoped>
    .container{
        position: relative;
        widows: 768px;
        
        overflow: hidden;
        border-radius: 10px;
        box-shadow: 0 15px 30px rgba(0, 0, 0, .0),
                    0 10px 10px rgba(0, 0, 0, .0);
        background: linear-gradient(to bottom,#5f1d1d54, rgba(189, 131, 131, 0.5));
    }
    .inner{
        width: 100%;
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
    .tbl{
        padding: 10px 10px;
        margin-top: 40px;
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
        padding: 20px 20px;
        width: calc(50% - 120px);
        height: calc(100% - 180px);
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
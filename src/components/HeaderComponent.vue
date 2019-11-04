<template>
    <div>    
            <header id="header">
                <a class="logo" href="index.html">Clever<span class="colorlogo">samurai&trade;</span></a>
                <nav>
                    <a href="javascript:void(0);" id="menu_1" @click="handleClick">Menu</a>
                </nav>
            </header>
            <!-- Nav -->
            <nav id="menu">
                <ul class="links">
                    <li><router-link to='/'>Home</router-link></li>
                    <li><router-link to='/services'>Our App</router-link></li>
                    <li><router-link to='/register'>Register</router-link></li>
                    <li class="logout" v-if="user"><a v-on:click="logout">Logout</a></li>
                    <li v-else><router-link to='/login'>Login</router-link></li>
                </ul>
            </nav>
    </div>
</template>

<script>

export default {
  data () {
    let toekn = localStorage.getItem('token');
		return {
      token:toekn,
      user: this.getToken
		}
  },  
  computed: {
    getToken: function () {
        console.log('==Computed==>'+this.$store.getters.loggedIn);
        this.user = this.$store.getters.loggedIn;
        return this.$store.getters.loggedIn;
    },
  },
  watch : {
   getToken: function () {
        console.log('===watch'+this.$store.getters.loggedIn);
        this.user = this.$store.getters.loggedIn;
        return this.$store.getters.loggedIn;
    }
  },  
  mounted(){
  //  console.log('===>'+this.getToken);
    this.verifyAuth();
  },
  methods: {
    handleClick: function() {
      jQuery('#menu').append('<a href="javascript:void(0);" class="close"></a>');
      jQuery('body').addClass('is-menu-visible');
      jQuery( ".close" ).click(function() {
        jQuery('body').removeClass('is-menu-visible');
      });
    },
    verifyAuth(){
      let toekn = localStorage.getItem('token');
      //console.log('====>'+val);
      if(toekn){
          this.$router.push('/');
      }
    },    
    logout(){
            console.log('logout');
            //login action code here
            this.$store.dispatch('destroyToken')
            .then(response => {
                this.$router.push('/')
            })
        },
    
  }
  
}
</script>
<style scoped>
.colorlogo{
    color: rgb(245, 4, 4);
}
.logout{
  cursor: pointer;
}
</style>






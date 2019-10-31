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
                    <li v-if="token"><a v-on:click="logout">Logout</a></li>
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
			token:toekn
		}
	},  
  mounted(){
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
    logout: function(){
      //alert('logout');
      let toeken = localStorage.setItem('token','');
      
      if(!toeken){
          localStorage.setItem('uid','');
          this.$router.push('/login');
      }
    }
    
  }
  
}
</script>
<style scoped>
.colorlogo{
    color: rgb(245, 4, 4);
}
</style>






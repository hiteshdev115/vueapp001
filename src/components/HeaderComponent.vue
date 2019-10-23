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
                    <li><router-link to='/register'>Register</router-link></li>
                    <li><router-link to='/login'>Login</router-link></li>
                </ul>
            </nav>
    </div>
</template>

<script>

export default {
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
    }
    
  }
  
}
</script>
<style scoped>
.colorlogo{
    color: rgb(245, 4, 4);
}
</style>






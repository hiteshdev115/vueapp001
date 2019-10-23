
<template>
  <div id="app">

     <app-header></app-header>
      
      <router-view />

      <app-footer></app-footer>

  </div>
</template>



<script>
import header from "@/components/HeaderComponent.vue";
import footer from "@/components/FooterComonent.vue";

export default {
  components: {
        'app-header': header,
        'app-footer': footer
  }
}
</script>




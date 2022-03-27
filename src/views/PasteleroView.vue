<template>
  <div class="pastelero">
    <Logo/>
    <!--ColorCode/-->
    <SaboresRestantes/>
    <AdornosRestantes/>
    <Formulario/>    
    <PiePagina/>    
  </div>
</template>

<script>
import Logo from "../components/Logo.vue";
import ColorCode from "../components/InputColor.vue";
import SaboresRestantes from "../components/SaboresRestantes.vue";
import AdornosRestantes from "../components/AdornosRestantes.vue";
import Formulario from "../components/Formulario.vue";
import PiePagina from "../components/Pie.vue";

export default {
  name: 'HomeView',
  components:{
    ColorCode,
    SaboresRestantes,
    AdornosRestantes,
    Formulario,
    PiePagina,
    Logo
  }
}
</script>

<style scoped>
  div{
    margin-bottom: 10px;
    color: whitesmoke;
  }
</style>

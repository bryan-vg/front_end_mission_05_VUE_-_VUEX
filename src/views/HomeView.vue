<template>
  <div class="home">
    <Logo/>
    <!--Contador/-->
    <!--Cuadrado/-->
    <!--Botones/-->
    <!--ColorCode/-->
    <Sabores/>
    <Adornos/>
    <Formulario/>
    <PiePagina/>
  </div>
</template>

<script>
import Contador from "../components/Contador.vue";
import Cuadrado from "../components/Cuadrado.vue";
import Botones from "../components/Botones.vue";
import ColorCode from "../components/InputColor.vue";
import Sabores from "../components/Sabores.vue";
import Formulario from "../components/Formulario.vue";
import Adornos from "../components/Adornos.vue";
import PiePagina from "../components/Pie.vue";
import Logo from "../components/Logo.vue";

export default {
  name: 'HomeView',
  components:{
    Contador,
    Cuadrado,
    Botones,
    ColorCode,
    Sabores,
    Formulario,
    Adornos,
    PiePagina,
    Logo
  }
}
</script>

<style>
  div{
    margin-bottom: 10px;
  }
  .contador{
    font-size: 80px;
  }
  .botones button{
    font-size: 40px;
    width: 100px;
    margin: 0, 10px;
  }
  .cuadrado{
    font-size: 25px;
  }

</style>
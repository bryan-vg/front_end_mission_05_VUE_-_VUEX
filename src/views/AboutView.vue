<template>
  <div class="about">
    <Logo/>
    <AcercaDe/>
    <PiePagina/>
  </div>
</template>

<script>
import AcercaDe from "../components/AcercaDe.vue";
import PiePagina from "../components/Pie.vue";
import Logo from "../components/Logo.vue";

export default {
  name: 'HomeView',
  components:{
    AcercaDe,
    PiePagina,
    Logo
  }
}
</script>

<style scoped>
  div{
    margin-bottom: 10px;
    color: yellow;
  }
</style>

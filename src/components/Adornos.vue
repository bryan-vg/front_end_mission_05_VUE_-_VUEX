<template>
    <div class="container">
        <h3>{{$store.state.adornosTitle}}</h3>
        <!-- check boxes con las decoraciones de los pasteles-->
        <label for="deco1">{{$store.state.adorno1}}</label><br>
        <input type="checkbox" id="deco1" class="deco1" name="deco1" value="Fondant">
        
        <label for="deco2">{{$store.state.adorno2}}</label><br>
        <input type="checkbox" id="deco2" name="deco2" value="Crema_mantequilla">
        
        <label for="deco3">{{$store.state.adorno3}}</label><br>
        <input type="checkbox" id="deco3" name="deco3" value="Merengue">

        <label for="deco4">{{$store.state.adorno4}}</label><br>
        <input type="checkbox" id="deco4" name="deco4" value="Chantilly">

        <label for="deco5">{{$store.state.adorno5}}</label><br>
        <input type="checkbox" id="deco5" name="deco5" value="Ganache">
    </div>

</template>

<script>
export default {
    name: 'Adornos'
}
</script>
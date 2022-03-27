<template>
    <div class="container">
        <h3>{{$store.state.saboresTitle}}</h3>
        <!-- check boxes con los sbores de los pasteles-->
        <label for="sabor1">{{$store.state.sabor1}}</label><br>
        <input type="checkbox" id="sabor1" class="sabor1" name="sabor1" value="Vainilla">
        <label for="sabor2">{{$store.state.sabor2}}</label><br>
        <input type="checkbox" id="sabor2" name="sabor2" value="Fresa">
        <label for="sabor3">{{$store.state.sabor3}}</label><br>
        <input type="checkbox" id="sabor3" name="sabor3" value="Chocolate">        
    </div>
</template>

<script>
export default {
    name: 'Sabores'
}
</script>
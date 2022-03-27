<template>
    <br>
    <br>
    <footer>
        <p>{{$store.state.nombrePasteleria}}<br>{{$store.state.direccionPasteleria}}<br> {{$store.state.telefonoPasteleria}}<br> {{$store.state.horarioPasteleria}}</p>
    </footer>
</template>

<script>
export default {
    name: 'PiePagina'
}
</script>
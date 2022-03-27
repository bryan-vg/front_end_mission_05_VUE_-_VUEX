<template>
    
    <h3>{{$store.state.tablaSaboresRestantesTitle}}</h3>        
    <!--tabla de los sabores restantes-->
    <table>
        <tr>
            <th>{{$store.state.saborTablaTitle}}</th>
            <th>{{$store.state.cantidadRestanteTablaTitle}}</th>
            <th>{{$store.state.rindeNumPastelesTablaTitle}}</th>
        </tr>
        <tr>
            <th>{{$store.state.saborRestante1Tabla}}</th>
            <th>{{$store.state.gramosSaborRestante1Tabla}}</th>
            <th>{{$store.state.rindeNumPastelesSaborRestante1Tabla}}</th>
        </tr>
        <tr>
            <th>{{$store.state.saborRestante2Tabla}}</th>
            <th>{{$store.state.gramosSaborRestante2Tabla}}</th>
            <th>{{$store.state.rindeNumPastelesSaborRestante2Tabla}}</th>
        </tr>
        <tr>
            <th>{{$store.state.saborRestante3Tabla}}</th>
            <th>{{$store.state.gramosSaborRestante3Tabla}}</th>
            <th>{{$store.state.rindeNumPastelesSaborRestante3Tabla}}</th>
        </tr>
    </table>
    <br>
    <br>
</template>

<script>
export default {
    name: 'SaboresRestantes'
}
</script>
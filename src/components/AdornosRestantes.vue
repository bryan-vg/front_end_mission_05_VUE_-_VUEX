<template>
    <!--tabla de los adornos restantes-->
    <p>{{$store.state.tablaAdornosTitle}}</p>    
    <table>
        <tr>
            <th>{{$store.state.nombreAdornoTablaRestantesTitle}}</th>
            <th>{{$store.state.cantidadRestanteTablaAdornosRestantesTitle}}</th>
            <th>{{$store.state.rindeNumPastelesAdornosRestantesTablaTitle}}</th>
        </tr>

        <tr>
            <th>{{$store.state.nombreAdorno1TablaRestantes}}</th>
            <th>{{$store.state.cantidadRestante1TablaAdornosRestantes}}</th>
            <th>{{$store.state.rindeNumPasteles1AdornosRestantesTabla}}</th>
        </tr>
        <tr>
            <th>{{$store.state.nombreAdorno2TablaRestantes}}</th>
            <th>{{$store.state.cantidadRestante2TablaAdornosRestantes}}</th>
            <th>{{$store.state.rindeNumPasteles2AdornosRestantesTabla}}</th>
        </tr>
        <tr>
            <th>{{$store.state.nombreAdorno3TablaRestantes}}</th>
            <th>{{$store.state.cantidadRestante3TablaAdornosRestantes}}</th>
            <th>{{$store.state.rindeNumPasteles3AdornosRestantesTabla}}</th>
        </tr>

        <tr>
            <th>{{$store.state.nombreAdorno4TablaRestantes}}</th>
            <th>{{$store.state.cantidadRestante4TablaAdornosRestantes}}</th>
            <th>{{$store.state.rindeNumPasteles4AdornosRestantesTabla}}</th>
        </tr>
        <tr>
            <th>{{$store.state.nombreAdorno5TablaRestantes}}</th>
            <th>{{$store.state.cantidadRestante5TablaAdornosRestantes}}</th>
            <th>{{$store.state.rindeNumPasteles5AdornosRestantesTabla}}</th>
        </tr>
    </table>
    <br>
    <br>

</template>

<script>
export default {
    name: 'AdornosRestantes'
}
</script>
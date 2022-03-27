<template>
    <div class="container">
        <h3>{{$store.state.formularioTitle}}</h3>
        <br>
        <!-- formulario para los datos basicos del cliente -->
        <label for="Input1">{{$store.state.nombreInputLabel}}</label><br><br>
        <input type="text" id="Input1" name="Input1" placeholder="nombre" maxlength="255" v-model="nombreChange">
        <br><br>

        <!-- input de telefono-->
        <label for="tel1">{{$store.state.telefonoInputLabel}}</label><br><br>
        <input type="tel" id="tel1" name="tel1" maxlength="10" placeholder="telefono" v-model="telefonoChange">
        <br><br>

        <!-- input de correo-->
        <label for="correo1">{{$store.state.emailInputLabel}}</label><br><br>
        <input type="email" id="correo1" name="correo1" placeholder="correo" v-model="correoChange">
        <br><br>

        <label for="Input2">{{$store.state.descripcionInputLabel}}</label>
        <br>
        <textarea id="Input2" name="Input2" rows="2" cols="30" v-model="textAreaChange"></textarea>
        <br/>
        <input type="submit" value="Enviar">
    </div>

</template>

<script>
export default {
    name: 'Formulario',
    computed: {
        nombreChange: {
            get(){
                return this.$store.state.nombre;
            },
            set(nombre){
                this.$store.dispatch("nombreChange", nombre);
            }
        },
        telefonoChange: {
            get(){
                return this.$store.state.telefono;
            },
            set(telefono){
                this.$store.dispatch("telefonoChange", telefono);
            }
        },
        correoChange: {
            get(){
                return this.$store.state.correo;
            },
            set(correo){
                this.$store.dispatch("correoChange", correo);
            }
        },
        textAreaChange: {
            // se puede incluir una funcon en el componente de sabores y adornos, que al amomento de editarse el check
            // mande a concatenar (+=) el texto del adorno o sabor al campo del textArea en el index.js
            get(){
                return this.$store.state.textArea;
            },
            set(textArea){
                this.$store.dispatch("textAreaChange", textArea);
            }
        }
    }
}
</script>
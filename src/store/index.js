import { createStore } from 'vuex'

export default createStore({
  state: {
    contador: 0,
    color: 'white',
    saboresTitle: 'Sabor(es)',
    sabor1: 'Sabor vainilla: $100',
    sabor2: 'Sabor fresa: $50',
    sabor3: 'Sabor chocolate: $70',
    formularioTitle: 'Ingresa tus datos',
    nombre: 'nombre?',
    nombreInputLabel: 'Ingresa tu nombre',
    telefono: '123-456',
    telefonoInputLabel: 'Ingresa tu telefono',
    correo: 'mail',
    emailInputLabel: 'Ingresa tu e-mail',
    textArea: 'descripcion',
    descripcionInputLabel: 'Descripcion del pastel:',
    adornosTitle: 'Decoracion(es)',
    adorno1: 'Decoracion de Fondant: $50',
    adorno2: 'Crema de mantequilla: $30',
    adorno3: 'Decoracion de Merengue: $70',
    adorno4: 'Decoracion de Chantilly: $80',
    adorno5: 'Decoracion de Ganache: $130',
    nombrePasteleria: '@Copyright 2022 Bikini Bottom Bakery',
    direccionPasteleria: 'Interseccion de Calle Concha y Av. Coral, No 10',
    telefonoPasteleria: 'Tel. (123) 4567890',
    horarioPasteleria: 'Lunes a Sabado, de 8 am a 8 pm',
    saborTablaTitle: 'Sabor',
    cantidadRestanteTablaTitle: 'Cantidad restante',
    rindeNumPastelesTablaTitle: 'Rinde # pasteles',
    tablaSaboresRestantesTitle: 'Sabores Restantes',
    saborRestante1Tabla: 'Vainilla',
    gramosSaborRestante1Tabla: '300 g.',
    rindeNumPastelesSaborRestante1Tabla: 4,    
    saborRestante2Tabla: 'Fresa',
    gramosSaborRestante2Tabla: '500 g.',
    rindeNumPastelesSaborRestante2Tabla: 7,
    saborRestante3Tabla: 'Chocolate',
    gramosSaborRestante3Tabla: '100 g.',
    rindeNumPastelesSaborRestante3Tabla: 1,

    tablaAdornosTitle: 'Adornos restantes',
    nombreAdornoTablaRestantesTitle: 'Adorno',
    cantidadRestanteTablaAdornosRestantesTitle: 'Cantidad restante',
    rindeNumPastelesAdornosRestantesTablaTitle: 'Rinde # pasteles',

    nombreAdorno1TablaRestantes: 'Fondant',
    cantidadRestante1TablaAdornosRestantes: '800 g.',
    rindeNumPasteles1AdornosRestantesTabla: 2,
    nombreAdorno2TablaRestantes: 'Crema de mantequilla',
    cantidadRestante2TablaAdornosRestantes: '3 kg.',
    rindeNumPasteles2AdornosRestantesTabla: 10,
    nombreAdorno3TablaRestantes: 'Merengue',
    cantidadRestante3TablaAdornosRestantes: '300 g.',
    rindeNumPasteles3AdornosRestantesTabla: 2,
    nombreAdorno4TablaRestantes: 'Chantilly',
    cantidadRestante4TablaAdornosRestantes: '1 kg.',
    rindeNumPasteles4AdornosRestantesTabla: 4,
    nombreAdorno5TablaRestantes: 'Ganache',
    cantidadRestante5TablaAdornosRestantes: '500 g.',
    rindeNumPasteles5AdornosRestantesTabla: 3
  },
  getters: {
    cuadrado(state){
      return state.contador * state.contador;
    }
  },
  mutations: {
    // en las mutaciones NO se pueden hacer cosas de codigo asincrono, como llamar apis
    subirContador(state, random){
      state.contador += random;
    },
    bajarContador(state, random){
      state.contador -= random;
    },
    colorChange(state, codigo){
      state.color = codigo;
    },
    nombreChange(state, nombre){
      state.nombre = nombre;
    },
    telefonoChange(state, telefono){
      state.telefono = telefono;
    },
    correoChange(state, correo){
      state.correo = correo;
    },
    textAreaChange(state, textArea){
      state.textArea = textArea;
    }
  },
  actions: {
    // en las acciones si se pueden hacer cosas de codigo asincrono, como llamar apis
    async subirContador({commit}){
      const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new');
      const results = await res.json();
      console.log("el numero es: " + results);
      commit("subirContador", results);
    },
    async bajarContador({commit}){
      const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new');
      const results = await res.json();
      console.log("el numero resta es: " + results);
      commit("bajarContador", results);
    },
    async colorChange({commit}, codigo){
      commit("colorChange", codigo);
    },
    async nombreChange({commit}, nombre){
      commit("nombreChange", nombre);
    },
    async telefonoChange({commit}, telefono){
      commit("telefonoChange", telefono);
    },
    async correoChange({commit}, correo){
      commit("correoChange", correo);
    },
    async textAreaChange({commit}, textArea){
      commit("textAreaChange", textArea);
    }
  },
  modules: {
  }
})

var vm= new Vue ({
    el: '#appReceta',
    data: {
        lista_recetas : [
            {
                "id": "001",
                "nombre": "Receta de Arroz con leche",
                "descripcion": "En una olla añadimos la taza de arroz con 2 tazas de agua, agregamos las cáscaras de  cáscaras de naranja, previamente hervidas, cambiándole el agua 5 veces para quitar el amargo de la cáscara de naranja. Le agregamos la canela y los 3 clavos de olor, dejamos que hierva hasta que el agua se consuma.Una vez que el arroz ya está seco, quitamos las cáscaras, la canela y los clavos de olor.Añadimos 1 taza de leche evaporada y dejamos que hierva siempre moviendo todo para asegurarnos de que el arroz no se pegue en el fondo de la olla repitiendo este paso cada 5 minutos.Pasado unos 20 minutos a fuego lento, añadimos 1 lata de leche condensada, dejando que se cocine por unos 10 minutos más.Apagamos el fuego y agregamos 1/2 taza de pasas rubias o negras remojadas en licor.Finalmente, añadimos 1 cucharadita de esencia de vainilla y listo, servimos al gusto espolvoreando canela en polvo para decorar.",
                "chef": "Isabel Rescalvo",
                "ingredientes": [
                    {
                        "id": "i001",
                        "nombre": "1 taza de arroz"
                    },
                    {
                        "id": "i002",
                        "nombre": "1 lata de leche evaporada"
                    },
                    {
                        "id": "i003",
                        "nombre": "1 lata de leche condensada"
                    },
                    {
                        "id": "i004",
                        "nombre": "Trozos de cáscara de naranja"
                    },
                    {
                        "id": "i005",
                        "nombre": "2 palitos de canela"
                    },
                    {
                        "id": "i006",
                        "nombre": "3 clavos de olor"
                    },
                    {
                        "id": "i007",
                        "nombre": "1/2 taza de pasas rubias o negras"
                    }
                ]
            },
            {
                "id": "002",
                "nombre": "Receta de Mazamorra Morada",
                "descripcion": "Primero hierve, durante una 1 hora, un kilo de maíz morado en 4 litros de agua, 2 ramas de canela entera, 6 clavos de olor, además de cáscaras de una piña, melocotones, piñas y duraznos secos al gusto.Colocar el líquido y volver a poner el líquido a fuego lento, ahora agrega  150 gramos de azúcar, ½ taza de guindones, piña fresca en cuadraditos.Hierve a fuego lento hasta que la fruta esté cocida.En un recipiente coloca 1 litro de agua,100 gramos de maicena,100 gramos de chuño y disolver.Añade esta nueva mezcla a la olla mientras mueve todo con un cucharón, nuevamente agrega un jugo de limón sin dejar de mover. Ya está listo para servir, agrega canela molida espolvoreada.",
                "chef": "Carla León",
                "ingredientes": [
                    {
                        "id": "i001",
                        "nombre": "1 kg de maíz morado"
                    },
                    {
                        "id": "i002",
                        "nombre": "2 ramas de canela entera"
                    },
                    {
                        "id": "i003",
                        "nombre": "6 clavos de olor"
                    },
                    {
                        "id": "i004",
                        "nombre": "1 cáscara de piña"
                    },
                    {
                        "id": "i005",
                        "nombre": "Melocotones secos al gusto"
                    },
                    {
                        "id": "i006",
                        "nombre": "1 Litro de agua"
                    },
                    {
                        "id": "i007",
                        "nombre": "100 gramos de Maicena"
                    }
                ]
            },
            {
                "id": "003",
                "nombre": "Receta Crema volteada",
                "descripcion": "Primero haremos el caramelo en una olla a fuego medio poniendo 300 gr de azúcar blanca moviendo constantemente para que todo quede parejo y se disuelva por completo como un caramelo.Ahora vaciamos todo el caramelo en un molde nro 24 esparciéndolo por las paredes del molde y lo dejamos enfriarCalentamos el horno por 15 minutos a 170°.Ahora en un bol ponemos 1 litro de Leche fresca y 350 gr de azúcar.Luego colocamos los 15 Huevos batidos en el bol con la ayuda de un colador y 1 cucharada de esencia de Vainilla y lo movemos hasta que se disuelva el azúcar.Ahora vaciamos todo el contenido al molde y lo ponemos en el horno a baño maría es decir sobre una azafata con agua por 2 hora y 10 minutos dependiendo del horno pues no todos son iguales.Por último pasado el tiempo verificamos con un cuchillo si la crema volteada esta lista y lo dejamos enfriar por un día y ¡LISTO!",
                "chef": "Maria Torres",
                "ingredientes": [
                    {
                        "id": "i001",
                        "nombre": "1  litro de Leche fresca"
                    },
                    {
                        "id": "i002",
                        "nombre": "650 gr de azúcar blanca"
                    },
                    {
                        "id": "i003",
                        "nombre": "15 Huevos batidos"
                    },
                    {
                        "id": "i004",
                        "nombre": "1 cucharada de esencia de Vainilla"
                    }
                ]
            },
            {
                "id": "004",
                "nombre": "Receta de Pastel de Choclo Peruano",
                "descripcion": "Licue los choclos con la leche.Mezcle con la sal, el azúcar y la manteca.Aparte, bata las claras a punto nieve; agregue una a una las yemas y siga batiendo durante un minuto más.Añada el chuño y el polvo para hornear.Mezcle de forma envolvente con una espátula.Vierta esta mezcla sobre la masa de choclo y revuelva.Enmantequille un recipiente refractario rectangular y vierta la preparación anterior.Cubra con las tajadas de queso fresco y espolvoree el azúcar.Lleve al horno; a 180°C durante 45 minutos.Retire y sirva al gusto.",
                "chef": "Sofia Montesco",
                "ingredientes": [
                    {
                        "id": "i001",
                        "nombre": "5 choclos desgranados"
                    },
                    {
                        "id": "i002",
                        "nombre": "1/2 tz leche fresca"
                    },
                    {
                        "id": "i003",
                        "nombre": "1 cdta. sal"
                    },
                    {
                        "id": "i004",
                        "nombre": "3 cdas azúcar"
                    },
                    {
                        "id": "i005",
                        "nombre": "1/4 tz manteca vegetal derretida"
                    },
                    {
                        "id": "i006",
                        "nombre": "4 claras"
                    },
                    {
                        "id": "i007",
                        "nombre": "1 1/2 cdtas polvo para hornear cernido"
                    }
                ]
            }
        ],
        search : '',
        show_add_receta : false,
        new_receta: {
            "id": "",
            "nombre": "",
            "descripcion": "",
            "chef": "",
            "ingredientes": []
        },
        nuevo_ingrediente: '',
        receta_seleccionada: null,
    },
    computed: {
        lista_recetas_filtrada: function () {
            var self = this
            return this.lista_recetas.filter(
                function (value) {  
                    return value.nombre.includes(self.search)
                }
            )
        }
    },
    methods: {
        AgregarIngrediente: function () {
            // console.log(this.nuevo_ingrediente)
            var new_date = new Date()
            var ingrediente = {
                "id": "i1000" +  new_date.getTime(),
                "nombre": this.nuevo_ingrediente
            }

            this.new_receta.ingredientes.push(ingrediente)
        },
        AgregarReceta: function () {
            this.lista_recetas.push(this.new_receta)
        },
        SeleccionarReceta: function(receta) {
            this.receta_seleccionada = receta
            
        }
    }
})
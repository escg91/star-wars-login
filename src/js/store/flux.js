const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            // likesGuardados: [],
            personajes: [],
            planetas: [],
            vehiculos: [],
            detailPersonaje: {},
            detailPlaneta: {},
            detailVehiculo: {},


        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },

            getDetailpersonaje: (id) => {
                fetch("https://www.swapi.tech/api/people/" + id)
                    .then((response) => response.json())
                    .then((data) => setStore({
                        detailPersonaje: data.result
                    }));
            },

            getDetailPlaneta: (id) => {
                fetch("https://www.swapi.tech/api/planets/" + id)
                    .then((response) => response.json())

                    .then((data) => setStore({
                        detailPlaneta: data.result
                    }));
            },

            getDetailVehiculo: (id) => {
                fetch("https://www.swapi.tech/api/vehicles/" + id)
                    .then((response) => response.json())

                    .then((data) => setStore({
                        detailVehiculo: data.result
                    }));
            },

            personajesFetch: () => {
                /**
                	fetch().then().then(data => setStore({ "foo": data.bar }))
                */
                fetch("https://www.swapi.tech/api/people/")
                    .then((response) => response.json())
                    // .then((data) => console.log(data.results))
                    .then((data) => setStore({
                        personajes: data.results
                    }));
            },

            planetasFetch: () => {
                fetch("https://www.swapi.tech/api/planets/")
                    .then((response) => response.json())
                    //.then((data) => console.log(data))
                    .then((data) => setStore({
                        planetas: data.results
                    }));
            },
            vehiculosFetch: () => {
                fetch("https://www.swapi.tech/api/vehicles/")
                    .then((response) => response.json())
                    //.then((data) => console.log(data))
                    .then((data) => setStore({
                        vehiculos: data.results
                    }));
            },

            // giveMeLikes: likes => {
            //     const store = getStore();
            //     setStore({
            //         likesGuardados: [
            //             ...store.likesGuardados,
            //             likes
            //         ]
            //     });
            // },

            // dotLikeItAnymore: like => {
            //     const store = getStore();
            //     setStore({
            //         likesGuardados: store.likesGuardados.filter((elemento) => elemento !== like)
            //     })
            //     console.log("hola")
            // },

            changeColor: (index, color) => {
                //get the store
                const store = getStore();

                //we have to loop the entire demo array to look for the respective index
                //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });

                //reset the global store
                setStore({
                    demo: demo
                });
            }
        }
    };
};

export default getState;
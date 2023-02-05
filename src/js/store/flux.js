const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            favoritos: [],
            personajes: [],
            planetas: [],
            vehiculos: [],
            detailPersonaje: {},
            detailPlaneta: {},
            detailVehiculo: {},
            usuariologueado: false

        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },

            getDetailCharacter: (id) => {
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

            addFavorites: (item) => {
                const store = getStore();
                if (store.favoritos.includes(item)) {
                    getActions().deleteFavorites(item)
                } else {
                    setStore({
                        favoritos: [...store.favoritos, item]
                    })
                }
            },
            deleteFavorites: (itemFavorite) => {
                const store = getStore();
                setStore({
                    favoritos: store.favoritos.filter((item) => item !== itemFavorite)
                })
            },
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
            },
            login: (email, contraseña) => {
                try {
                    fetch('https://3000-escg91-starwarsapilogin-b224ik34gvm.ws-us85.gitpod.io/login', {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            "email": email,
                            "contraseña": contraseña

                        })
                    }).then((response) => {
                        if (response.status === 200) {
                            setStore({
                                usuariologueado: true,

                            })
                        }
                        return response.json()
                    }).then((data) => {
                        localStorage.setItem("token", data.access_token)
                        if (data.msg === "Bad username or password" || data.msg === "User does not exist") {
                            alert(data.msg)
                        }
                        console.log(data);
                    });
                } catch (e) {
                    console.log(e);
                }
            },
            cerrarsesion: () => {
                localStorage.removeItem('token');
                setStore({
                    usuariologueado: false,

                })
            }
        }
    };
};

export default getState;
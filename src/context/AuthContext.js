import { View, Text } from 'react-native'
import React, { useContext, useState, useEffect, createContext } from 'react'

// archivo en donde voy a especificar el contexto de autenticacion, con el fin de gestionar las props de autenticacion
// sin pasalas por multiples componentes

const AuthContext = createContext({
    auth: undefined,
    login: () => { }, // basicamente, esto indica que el tipo de dato que espero que sea login es una funcion
    logout: () => { }
})

// el {} es el que contendra el contexto, el que datos va a tener

// el provider es toda la que? que va a ser el contexto
// va a envolver toda la app, y el hijo va a ser toda la app


const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(undefined)


    // funciones de login y logout
    const login = (userData) => {
        console.log("userDtaa: ", userData)
        setAuth(userData)
    }

    const logout = () => {
        setAuth(undefined)
    }

    // los datos de mi contexto
    const valueContext = {
        auth,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={valueContext}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }
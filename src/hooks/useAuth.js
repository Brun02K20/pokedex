import { View, Text } from 'react-native'
import React, { useState, useEffect, useContext, createContext } from 'react'
import { AuthContext, AuthProvider } from '../context/AuthContext.js'

// custom hook para obtener el valor actual del proveedor del contexto

// accede al contexto, extrae el valur, y lo devuelve
export default () => useContext(AuthContext)
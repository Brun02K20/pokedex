import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { useForm, Controller } from 'react-hook-form';
import { user, userDetails } from '../../utils/userDB.js';

const LoginForm = () => {
    const { register, setValue, formState: { errors }, reset, handleSubmit, control } = useForm({
        defaultValues: {
            userName: "",
            password: ""
        }
    })

    const [loginError, setLoginError] = useState(false);

    const onSubmit = (data) => {
        console.log("lo que ingreso el usuario: ", data)
        if (data.userName !== user.username || data.password !== user.password) {
            setLoginError(true)
            return
        }
        setLoginError(false)
        reset()
    }

    return (
        <View>
            <Text style={styles.title}>Iniciar Sesión</Text>

            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        placeholder="User name"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        style={styles.input}
                    />
                )}
                name="userName"
            />
            {errors.userName && <Text style={styles.error}>El nombre de usuario es requerido.</Text>}

            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        placeholder="password"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        style={styles.input}
                    />
                )}
                name="password"
            />
            {errors.password && <Text style={styles.error}>La contraseña es requerida.</Text>}
            {loginError && <Text style={styles.error}>Las credenciales son incorrectas.</Text>}
            <Button title="Enviar" onPress={handleSubmit(onSubmit)} />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 20
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    },
    error: {
        textAlign: "left",
        color: "red",
        marginTop: -12,
        marginLeft: 16
    }
})


export { LoginForm }
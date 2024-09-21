import { useReducer, useEffect } from "react";

const initialState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''
}

const authReducer = (state, action) => {
    switch (action.type) {
        case 'logout':
            return {
                validando: false,
                token: null,
                username: '',
                nombre: ''
            }
        case 'login':
            const { nombre, username } = action.payload;
            return {
                validando: false,
                token: 'MITOKEN1234567890',
                username: username,
                nombre: nombre
            }
        default:
            return state;
    }
}

export const IncisoG = () => {
    const [state, dispatch] = useReducer(authReducer, initialState)

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout' })
        }, 2500);
    }, []);

    const login = () => {
        dispatch({
            type: 'login',
            payload: {
                username: 'jatorrey',
                nombre: 'Jaime'
            }
        })
    }

    if (state.validando) {
        return (
            <>
                <h3>Login</h3>
                <div className="ficAlertInfo_Div">
                    Validando Información...
                </div>
            </>
        )
    }

    return (
        <>
            <h3>Login</h3>
            {
                state.token
                    ? <div className="ficAlertSuccess_Div">Autenticado como: {state.nombre}</div>
                    : <div className="ficAlertDanger_Div">No Autenticado...</div>
            }
            {
                state.token
                    ? (
                        <button className="ficLogout_Button">
                            Logout
                        </button>
                    )
                    : (
                        <button className="btn btn-primary" onClick={login}>
                            Login
                        </button>
                    )
            }
        </>
    )
}

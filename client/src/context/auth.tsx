import { useReducer, createContext, ReactNode } from "react";
import jwtDecode, { JwtPayload } from "jwt-decode";

interface User {
    fullName: string;
    email: string;
    iat: number;
    exp: number;
}
interface AuthState {
    user: User | null;
}
interface AuthContextType extends AuthState {
    login: (userData: object) => void;
    logout: () => void;
    update: (userData: object) => void;
}
interface AuthProviderProps {
    children: ReactNode;
}
const initialState: AuthState = {
    user: null,
};
if (localStorage.getItem("jwtDecode")) {
    const decodedToken = jwtDecode<JwtPayload>(
        localStorage.getItem("jwtDecode") as string
    );
    if (decodedToken?.exp && decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem("jwtDecode");
        initialState.user = null;
    } else {
        initialState.user = decodedToken as User;
    }
}
const AuthContext = createContext<AuthContextType>({
    user: null,
    login: () => {},
    logout: () => {},
    update: () => {},
});

function authReducer(state: AuthState, action: any) {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                user: action.payload,
            };
        case "UPDATE":
            return {
                ...state,
                user: action.payload,
            };
        case "LOGOUT":
            return {
                ...state,
                user: null,
            };
        default:
            return state;
    }
}
function AuthProvider(props: AuthProviderProps) {
    const [state, dispatch] = useReducer(authReducer, initialState);
    function update(userData: any) {
        localStorage.setItem("jwtDecode", userData.token);
        dispatch({
            type: "UPDATE",
            payload: userData.data,
        });
    }
    function login(userData: any) {
        localStorage.setItem("jwtDecode", userData.token);
        dispatch({
            type: "LOGIN",
            payload: userData.result,
        });
    }
    function logout() {
        localStorage.removeItem("jwtDecode");
        dispatch({ type: "LOGOUT" });
    }
    return (
        <AuthContext.Provider
            value={{ user: state.user, login, logout, update }}
            {...props}
        />
    );
}
export { AuthContext, AuthProvider };
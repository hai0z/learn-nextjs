import React, { createContext, useState } from "react";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

interface IAuthContext {
    isLogin: boolean;
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IAuthProps {
    children: React.ReactNode;
}

const AuthProvider: React.FC<IAuthProps> = ({ children }) => {
    const [isLogin, setIsLogin] = useState<boolean>(false);
    return (
        <AuthContext.Provider
            value={{
                isLogin,
                setIsLogin,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;

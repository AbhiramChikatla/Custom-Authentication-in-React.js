import { createContext, useEffect, useState } from "react";

export const userContext = createContext();

export function UserContextProvider({ children }) {
    const [LoginUser, setLoginUser] = useState(null);
    useEffect(() => {
        if (!LoginUser) {
            fetch("http://localhost:3000/profile", {
                method: "GET",

                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            })
                .then((response) => response.json())
                .then((data) => {
                    setLoginUser(data);
                })
                .catch((error) => console.error("Error:", error));
        }
    }, []);

    return (
        <userContext.Provider value={{ LoginUser, setLoginUser }}>
            <div>{children}</div>
        </userContext.Provider>
    );
}

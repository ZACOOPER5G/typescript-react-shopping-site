import { useContext, createContext, ReactNode } from "react"

type ShoppingCartProviderProps = {
    children: ReactNode;
}

const ShoppingCartContext = createContext({})

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)
}

export const ShoppingCartProvider = ({ children }: ShoppingCartProviderProps) => {
    return (
        <ShoppingCartContext.Provider value={{}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
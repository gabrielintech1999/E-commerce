import { createContext, useContext } from "react";




const CartContext = createContext()




// 120 + 100 + 100 + 60 + 60


function cartReducer(state, action) {
   console.log("OK");
   
    
}

export function CartProvider({children}) {
    const name = "Gabriel"

    return(
        <CartContext.Provider value={{name}}>
            {children}
        </CartContext.Provider>
        
    )
}

export const useCart = () => useContext(CartContext)
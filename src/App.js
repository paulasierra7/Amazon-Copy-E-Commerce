import Footer from "./components/Footer";
import Header from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";
import React, { useState } from 'react';


const App = ({contadorInicial}) => { 
    

    return (
        <> 
            <Header 
                contador = {contadorInicial}
            />
            <ItemListContainer 
                nombre = "Horacio"
                type = "greeting"
            />
            <ItemCount/>
        </>
    )
}

export default App;

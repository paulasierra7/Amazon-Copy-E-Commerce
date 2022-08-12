import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/NavBar";
import Main from "./components/Main";
import ItemDetailContainer from "./components/ItemDetailContainer";

// import ItemListContainer from "./components/ItemListContainer";


const App = () => { 
    
    return (
        <> 
            <Header />
            <Main />
            <ItemDetailContainer/>
            <Footer />
            {/* <ItemListContainer /> */}
            
        </>
    )
}

export default App;

import Footer from "./Footer";
import Header from "./NavBar";
import ItemListContainer from "./ItemListContainer";


const App = () => { 
    return (
        //OBLIGATORIO poner <fragment><fragment/> o vacia <></> se llena solo
        <> 
            <Header />
            <ItemListContainer 
                nombre = "Horacio"
                type = "greeting"
            />
        </>
    )
}

export default App;

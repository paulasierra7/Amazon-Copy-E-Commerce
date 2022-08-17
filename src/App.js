import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter,  Routes, Route} from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";


const App = () => { 
    const onAdd = () =>{
        console.log("On Add")
    }
    
    return (
        <> 
        <BrowserRouter>
            <Header />
            <Main/>
            <Routes>
                <Route  exact path="/" element={ <ItemListContainer/> }  />
                <Route exact path="/itemdetail/:index" element={ <ItemDetailContainer/> } />           
            </Routes>
            <Footer />
            </BrowserRouter>
        </>
    )
}

export default App;

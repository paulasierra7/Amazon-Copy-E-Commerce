import { BrowserRouter} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";


const App = () => { 
    
    return (
        <BrowserRouter>
                <Header />
                <Main />
                <Footer />   
        </BrowserRouter>       
    )
}

export default App;

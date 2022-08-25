import { BrowserRouter} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import CustomProvider from "./components/CustomProvider";
import firebase from "./firebase";


const App = () => { 
    
    return (
        <BrowserRouter>
            <CustomProvider>
                    <Header />
                    <Main />
                    <Footer /> 
            </CustomProvider>  
        </BrowserRouter>       
    )
}

export default App;

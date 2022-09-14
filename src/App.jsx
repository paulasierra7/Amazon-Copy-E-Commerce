import { BrowserRouter} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import CustomProvider from "./components/CustomProvider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => { 
    
    return (
        <BrowserRouter>
            <CustomProvider>
                    <Header />
                    <Main />
                    <Footer />
                    <ToastContainer/> 
            </CustomProvider>  
        </BrowserRouter>       
    )
}

export default App;

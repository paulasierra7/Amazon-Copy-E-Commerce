import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';


const Banners = () => {
    return (
        <Carousel>
        <Carousel.Item>
        <Link to ="/category/tenis">
            <img
            className="d-block w-100"
            src="https://images.contentstack.io/v3/assets/blt818b0c67cf450811/blt6260bec08f03a096/62f2902556900276097558a8/ES-MX_NB_Banners_Primary_Desktop.jpg?quality=90&auto=webp&format=pjpg&height=450"
            alt="First slide"
            />
        </Link>    
        </Carousel.Item>
        <Carousel.Item>
        <Link to ="/category/sandals">
            <img
            className="d-block w-100"
            src="https://images.contentstack.io/v3/assets/blt818b0c67cf450811/blt7a6378c249a420d6/629a7ab7dd28e20f45d62ad1/ES-MX_HomepageBanners_Primary_Desktop-1.jpg?quality=90&auto=webp&format=pjpg&height=450"
            alt="Second slide"
            />
        </Link>
        </Carousel.Item>
        <Carousel.Item>
        <Link to ="/category/tenis">
            <img
            className="d-block w-100"
            src="https://images.contentstack.io/v3/assets/blt818b0c67cf450811/bltfe25238d7122550c/62c6f996d612b236472335f7/ES-MX-HomepageBnr1_Internal_Banners_Primary_Desktop.jpg?quality=90&auto=webp&format=pjpg&height=450"
            alt="Third slide"
            />
        </Link>
        </Carousel.Item>
        <Carousel.Item>
        <Link to ="/category/apparel">
            <img
            className="d-block w-100"
            src="https://images.contentstack.io/v3/assets/blt818b0c67cf450811/blt967d2287a352f08a/62e8350756900276097524f3/ES-MX_Homepage_KAWS_Primary-Desktop-IT.png?quality=90&auto=webp&format=pjpg&height=450"
            alt="Fourth slide"
            />
        </Link>
        </Carousel.Item>
        </Carousel>
    )
}

export default Banners
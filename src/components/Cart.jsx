import { useState } from "react"
import List from "./List";
import { db } from "../firebase"
import { collection, addDoc , serverTimestamp } from "firebase/firestore"
import { toast } from "react-toastify";
import { useCarrito } from "./CustomProvider";
import { v4 as uuidv4 } from "uuid";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
    } from "mdb-react-ui-kit";
    
    const Cart = () => {

            const { carrito, precioTotal, eliminarProducto, vaciarCarrito } = useCarrito()

            const [nombre, setNombre] = useState("");
            const [cardNumber, setCardNumber] = useState("");
            const [expiration, setExpiration] = useState("");
            const [cvv, setCVV] = useState("");
            const [usuarios, setUsuarios] = useState([]);


        const handleChangeNombre = (e) => {
            e.preventDefault()
            const input = e.target
            const value = input.value
            setNombre(value)
        }
        const handleChangeCardNumber = (e) => {
            const input = e.target
            const value = input.value
            setCardNumber(value)
        }
        const handleChangeExpiration = (e) => {
            const input = e.target
            const value = input.value
            setExpiration(value)
        }
        const handleChangeCVV = (e) => {
            const input = e.target
            const value = input.value
            setCVV(value)
        }

        const cardInformation = `Card Number: ${cardNumber} / Expiration day: ${expiration} / CVV: ${cvv}`;

        const handleConfirm = () => {

            const orden = {
            items: carrito,
            total : (precioTotal()),
            buyer : {
                name : nombre,
                payment : cardInformation,
            },
            date : serverTimestamp()
            }

            const ordersCollection = collection(db, "orders")
            const consulta = addDoc(ordersCollection, orden)

            consulta
            .then((res)=>{
                toast.success(`Felicitaciones. Tu orden ${res.id} creada con exito!`)
            })
            .catch(error => {
                console.log(error)
                toast.false(`Error, vuelve a diligenciar`)
            })
        }
        <List usuarios={usuarios} />

    return (
        <div>
            <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
                <MDBContainer className="py-5 h-100">
                    <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol>
                        <MDBCard>
                        <MDBCardBody className="p-4">
                            <MDBRow>
                            <MDBCol lg="7">
                                <hr />
                
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                <div>
                                    <p className="mb-1">Shopping cart</p>
                                </div>
                                <div>
                                    <p>
                                    <span className="text-muted">Sort by:</span>
                                    <a href="#!" className="text-body">
                                        price
                                        <MDBIcon fas icon="angle-down mt-1" />
                                    </a>
                                    </p>
                                </div>
                                </div>
                
                            {carrito?.map((item) => (
                                <article key={uuidv4()}>
                                <MDBCard className="mb-3">
                                <MDBCardBody>
                                        <div>
                                            <div className="d-flex justify-content-between">
                                            <div className="d-flex flex-row align-items-center">
                                                            <div>
                                                                <MDBCardImage
                                                                src={item.image}
                                                                fluid className="rounded-3" style={{ width: "65px" }}
                                                                alt="Shopping item" />
                                                            </div>
                                                            <div className="ms-3">
                                                                <MDBTypography tag="h5">
                                                                {item.product}
                                                                </MDBTypography>
                                                                <p className="small mb-0">{item.color}e</p>
                                                            </div>
                                                            <div className="d-flex flex-row align-items-center">
                                                                <div style={{ width: "50px" }}>
                                                                    <MDBTypography tag="h5" className="fw-normal mb-0">
                                                                    {item.cantidad}
                                                                    </MDBTypography>
                                                                </div>
                                                                <div style={{ width: "80px" }}>
                                                                    <MDBTypography tag="h5" className="mb-0">
                                                                    $ {item.price}
                                                                    </MDBTypography>
                                                                </div>
                                                                <a href="#!" style={{ color: "#cecece" }}>
                                                                    <MDBIcon fas icon="trash-alt" onClick={() => eliminarProducto(item.id)}/>
                                                                </a>
                                                            </div>
                                                    </div>
                                                
                                                </div>
                                        </div>
                                    </MDBCardBody>
                                </MDBCard>
                                </article>
                                
                                        ))}
                            </MDBCol>

                            
                
                            <MDBCol lg="5">
                                <MDBCard className="text-white rounded-3 " style={{ backgroundColor: "#262626" }}>
                                <MDBCardBody>
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                    <MDBTypography tag="h5" className="mb-0" >
                                        Detalles del pago
                                    </MDBTypography>
                                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                                        fluid className="rounded-3" style={{ width: "45px" }} alt="Avatar" />
                                    </div>
                                        <MDBCardImage className="me-2" width="45px"
                                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                                        alt="Visa" />
                                        <MDBCardImage className="me-2" width="45px"
                                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                                        alt="American Express" />
                                        <MDBCardImage className="me-2" width="45px"
                                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                                        alt="Mastercard" />
                                        <MDBCardImage className="me-2" width="45px"
                                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                                        alt="PayPal acceptance mark" />
                                    
                
                                    <form className="mt-4">
                                    <MDBInput className="mb-4" label="Nombre en la tarjeta" type="text" size="lg"
                                        placeholder="Cardholder's Name" contrast onChange={handleChangeNombre} value={nombre} required />
                
                                    <MDBInput className="mb-4" label="Numero de tarjeta" type="text" size="lg"
                                        minLength="19" maxLength="19" placeholder="1234 5678 9012 3457" contrast onChange={handleChangeCardNumber} value={cardNumber} required/>
                
                                    <MDBRow className="mb-4">
                                        <MDBCol md="6">
                                        <MDBInput className="mb-4" label="Vencimiento" type="text" size="lg"
                                            minLength="7" maxLength="7" placeholder="MM/YYYY" contrast onChange={handleChangeExpiration} value={expiration}  required/>
                                        </MDBCol>
                                        <MDBCol md="6">
                                        <MDBInput className="mb-4" label="CVV" type="text" size="lg" minLength="3"
                                            maxLength="3" placeholder="&#9679;&#9679;&#9679;" contrast onChange={handleChangeCVV} value={cvv} required/>
                                        </MDBCol>
                                    </MDBRow>
                                    </form>
                
                                    <hr />
                                        <div className="d-flex justify-content-between">
                                        <p className="mb-2">Total(Incl. taxes)</p>
                                        <p className="mb-2">$ {precioTotal()} USD</p>
                                        </div>
                    
                                        <MDBBtn color="danger" size="lg" onClick={vaciarCarrito}>
                                            Vaciar carrito
                                        </MDBBtn>
                                        <MDBBtn color="success" size="lg" onClick={handleConfirm}>
                                        <div className="d-flex justify-content-between">
                                            <span>$ {precioTotal()} USD </span>
                                            <span>
                                              Continuar{" "}
                                            <i className="fas fa-long-arrow-alt-right ms-2"></i>
                                            </span>
                                        </div> 
                                        </MDBBtn>
                                </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    </MDBRow>
                </MDBContainer>
                </section>
        </div>
        );
    }

export default Cart


import { useParams } from "react-router-dom"


const Page = (props) => {
    const { category } = useParams()

    // if(category === {apparel}){
    return (
        <>
            <div className="page">
            <br />
            {/*<header className="page__header">
                <h2>{props.titulo}</h2>
                <h3>{props.subtitulo}</h3> 
            </header>*/}
            <div className="page__content">
                <h4>Marcas populares</h4>
                {props.children}
            </div>
        </div>
        </>
    )
}

export default Page
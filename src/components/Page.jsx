// import { useParams } from "react-router-dom"


const Page = (props) => {
    // const { category } = useParams()

    return (
        <>
            <div className="page">
            <br />
            {/*<header className="page__header">
                <h2>{props.titulo}</h2>
                <h3>{props.subtitulo}</h3> 
            </header>*/}
            <div className="page__content">
                {props.children}
            </div>
        </div>
        </>
    )
}

export default Page
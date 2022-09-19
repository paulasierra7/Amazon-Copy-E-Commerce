const Page = (props) => {

    return (
        <>
            <div className="page">
            <br />
            <div className="page__content">
                {props.children}
            </div>
        </div>
        </>
    )
}

export default Page
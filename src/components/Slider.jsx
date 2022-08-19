import { useState } from "react"

const Slider = ({estadoPadre,setEstadoPadre}) => {

    const handleChange = (e) => {
        setEstadoPadre(e.target.value)
    }

    return (
        <>
            <input onChange={handleChange} type="range" step={1} />
        </>
    )
}
export default Slider
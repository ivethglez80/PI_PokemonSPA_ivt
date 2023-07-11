import React from "react"
import style from "./aboutdev.module.css"
import iveth_dev from "../../img/iveth_dev.png"

export default function aboutdev(){
    return(
        <div className={style.body}>
            <div className="style.imgcontainer">
                <img src={iveth_dev} alt="developer" />
            </div>
            <p>
                "its me!"
            </p>
        </div>
    )
}
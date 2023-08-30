import React from 'react'

export default function Button(props) {
    let class_name = `btn  mx-2 my-2 ${props.btncolor}`
    return (
        <a className={class_name} >{props.text}</a>

    )
}
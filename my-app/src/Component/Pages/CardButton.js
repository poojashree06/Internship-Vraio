import React from 'react'

export default function CardButton(props) {
    return (
        <button
            type="button"
            className="btn btn-sm btn-outline-secondary"
        >
            {props.text}
        </button>
    )
}
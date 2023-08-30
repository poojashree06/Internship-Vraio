import React from 'react'
import Card from '../Pages/Card'

export default function Album() {
    let card_data = [{
        paragraph: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
        time: 9,
        img_url: "./Thumbnail.jpg"
    }, {
        paragraph: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
        time: 9,
        img_url: "./Thumbnail.jpg"
    }, {
        paragraph: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
        time: 9,
        img_url: "./Thumbnail.jpg"
    }, {
        paragraph: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
        time: 9,
        img_url: "./Thumbnail.jpg"
    }, {
        paragraph: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
        time: 9,
        img_url: "./Thumbnail.jpg"
    }, {
        paragraph: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
        time: 9,
        img_url: "./Thumbnail.jpg"
    }, {
        paragraph: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
        time: 9,
        img_url: "./Thumbnail.jpg"
    }, {
        paragraph: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
        time: 9,
        img_url: "./Thumbnail.jpg"
    }, {
        paragraph: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
        time: 9,
        img_url: "./Thumbnail.jpg"
    }, {
        paragraph: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
        time: 9,
        img_url: "./Thumbnail.jpg"
    }, {
        paragraph: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
        time: 9,
        img_url: "./Thumbnail.jpg"
    }
    ]
    return (
        <div className="album py-5 bg-light">
            <div className="container">
                <div className="row">

                    {
                        card_data.map((element) => {
                            return (<Card data={element} />)
                        })
                    }

                </div>
            </div>
        </div>
    )
}
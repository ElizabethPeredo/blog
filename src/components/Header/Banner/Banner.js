import React from 'react'
import Link from 'next/link'

export default function Banner() {
    return (
        <section className="banner__container">
            <div className="banner__container-content">
                <div className="banner__container-content--text">
                    <h1>My name is <span>Elizabeth Peredo</span></h1>
                    <p>
                    </p>
                    <Link href='/page/contacto'>
                        <a className="btn">Contacto</a>
                    </Link>
                </div>
                <div className="banner__container-content--img">
                    <img src="https://image.spreadshirtmedia.net/image-server/v1/designs/16154699,width=178,height=178,colors%5B0%5D=FF3484.png" alt="" />
                </div>
            </div>
        </section>

    )
}
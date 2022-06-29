import React from 'react'
import Link from 'next/link'

export default function Banner() {
    return (
        <section className="banner__container">
            <div className="banner__container-content">
                <div className="banner__container-content--text">
                    <h1>My name is <span>Elizabeth Peredo</span></h1>
                    <p>lorem ipsum dolor sit amet, consectet lorem ipsum dolor lorem ipsum dolor sit am lorem ipsum dolor sit am lorem ipsum dolor sit amet, consectet lorem ipsum dolor lorem ipsum dolor sit am
                    </p>
                    <Link href='/'>
                        <a className="btn">Contacto</a>
                    </Link>
                </div>
                <div className="banner__container-content--img">
                    <img src="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg" alt="" />
                </div>
            </div>
        </section>

    )
}
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Contact() {
    return (
        <section className="contacto__container">
            <section className="contacto__container-box">
                <div className="contacto__container-box__img">
                </div>
                <div className="contacto__container-box__form">
                    <h2>CONTACTO</h2>
                    <form action="">
                        <input type="text" className="" placeholder="Nombre" />
                        <input type="email" className="" placeholder="Email" />
                        <textarea placeholder="Mensaje"></textarea>
                        <button>Enviar</button>
                    </form>
                </div>
            </section>
        </section>
    )
}
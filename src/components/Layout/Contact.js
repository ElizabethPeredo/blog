import React from 'react'

export default function Contact() {
    return (
        <section className="container color1">
            <section className="container__medium min-height-25 grid grid-fr l2 s1">
                <div className="min-height-25 max-height-25 box-shadow-lines overflow-hidden s-hidden">
                    <img src="/img/Landing/banner3.jpg" />
                </div>
                <div className="container">
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
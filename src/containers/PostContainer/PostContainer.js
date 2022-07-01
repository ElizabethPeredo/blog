import React from 'react'
import Link from 'next/link'

export default function PostContainer({ children }) {
    return (
        <section className="container__medium">
            <Link href='/Blog'>
                <a className="btn-post">Regresar</a>
            </Link>
            <hr/>
            <main className="article__container">
                {children}
            </main>
        </section>
    )
}
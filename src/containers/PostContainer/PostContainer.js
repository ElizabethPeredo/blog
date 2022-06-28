import React from 'react'
import Link from 'next/link'

export default function PostContainer({ children }) {
    return (
        <section className="container__medium">
            <Link href='/'>
                <a className="btn-post">Regresar</a>
            </Link>
            <article>
                {children}
            </article>
        </section>
    )
}
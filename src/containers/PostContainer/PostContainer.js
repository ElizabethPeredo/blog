import React from 'react'
import Link from 'next/link'
import btnabrir from '../BtnAbrir/BtnAbrir'

export default function PostContainer({ children }) {
    return (
        <section className="container__medium">
            <Link href='/Blog'>
                <a className="btn-post">Regresar</a>
            </Link>
            <hr/>
            <>
                {children}
            </>
        </section>
    )
}
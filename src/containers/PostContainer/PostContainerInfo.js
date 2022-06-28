import React from 'react'

export default function PostContainerInfo({ children }) {
    return (
        <section className="">
            <div className="container__article-top">
            {children}
            </div>
        </section>
    )
}
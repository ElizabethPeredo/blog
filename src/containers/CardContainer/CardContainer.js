import React from 'react'

export default function CardContainer({children}) {
  return (
    <section className="container__medium">
        <main className="container__post">
        {children}
        </main>
    </section>
  )
}
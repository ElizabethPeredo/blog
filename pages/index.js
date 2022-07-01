import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Banner from '../src/components/Header/Banner/Banner'
import About from '../src/components/Layout/About'
import Contact from '../src/components/Layout/Contact'
import Head from 'next/head'


export default function Home() {
    return (
        <>
            <Head>
                <title>Elizabeth Peredo</title>
                <meta charset="utf-8" />
                <meta name="keywords" content="elizabeth peredo mescco, elizabeth peredo, blog" />
                <meta name="author" content="Elizabet Peredo" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/paginationjs/2.1.4/pagination.css" />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-coy-without-shadows.min.css" rel="stylesheet" />              
            </Head>
            <Banner />
            <About />
            <Contact />
        </>

    )
}

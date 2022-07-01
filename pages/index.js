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

                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"></link>

                <link rel="icon" href=
                    "https://images.squarespace-cdn.com/content/v1/525209fae4b06a49dee763e0/1381240865910-MIZVDSBBD5TOM0SDX5LV/EP+logo+for+web.png"
                    type="image/x-icon"></link>
            </Head>
            <Banner />
            <About />
            <Contact />
        </>

    )
}

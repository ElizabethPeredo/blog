import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Banner from '../src/components/Header/Banner/Banner'
import About from '../src/components/Layout/About'
import Contact from '../src/components/Layout/Contact'

export default function Home() {
    return (
        <>
        <Banner/>
        <About/>
        <Contact/>
        </>
        
    )
}

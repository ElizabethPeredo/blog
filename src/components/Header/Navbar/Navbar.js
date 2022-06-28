import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
    function openMenu() {
        let menu = document.querySelector("#menu-bars");
        let navbar = document.querySelector(".navbar__items");
        menu.classList.toggle("fa-times");
        navbar.classList.toggle("active");

    };
    return (
        <header>
            <div className="navbar__container">
                <div className="navbar__logo">
                    
                    <Link href='/'>
                        <a href="">Elizabeth Peredo</a>
                    </Link>
                    <a className="invisible">EP</a>
                </div>
                <div className="navbar__items" id="menu">
                    <ul>
                        <Link href='/'>
                            <a className="">Home</a>
                        </Link>
                        <Link href='/Post'>
                            <a className="">Blog</a>
                        </Link>
                    </ul>
                </div>
                <div className="navbar__icon">
                    

                </div>
            </div>
        </header>
    )
}

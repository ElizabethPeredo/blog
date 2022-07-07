import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSun } from "@fortawesome/free-solid-svg-icons"


export default function Navbar() {
  function openMenu() {
    let menu = document.querySelector("#menu-bars");
    let navbar = document.querySelector(".navbar__items");
    menu.classList.toggle("fa-solid.fa-x");
    navbar.classList.toggle("active");
  }
  
  function filterSelection() {
    if (typeof window === 'object') {
      let x = document.querySelector("#__next");
      if (x !== null) {
        x.className = "background-body"
      }
    }
  }
  filterSelection()

  function dark() {
    let id = document.querySelector("#__next");
    id.classList.toggle("theme-dark");
  }
  return (
    <header>
      <navbar>
        <section className="navbar__container">
          <div className="navbar__logo">
            <Link href="/">
              <a href="">Elizabeth Peredo</a>
            </Link>
            <a className="invisible">EP</a>
          </div>
          <main className="navbar__container-right">

            <div className="navbar__items" id="menu">
              <ul>
                <Link href={{ pathname: "/" }}>
                  <a className="">Home</a>
                </Link>
                <Link href={{ pathname: "/blog" }}>
                  <a className="">Blog</a>
                </Link>
                <Link href={{ pathname: "/CV" }}>
                  <a className="">CV</a>
                </Link>
              </ul>
            </div>

            <div className="navbar__icon-dark">
              <FontAwesomeIcon className="i color1" icon={faSun} id="menu-bars" onClick={dark} />
            </div>

            <div className="navbar__icon">
              <FontAwesomeIcon className="i color1" icon={faBars} id="menu-bars" onClick={openMenu} />
            </div>
          </main>
        </section>
      </navbar>
    </header>
  );
}

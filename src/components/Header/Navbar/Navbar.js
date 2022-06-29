import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from "@fortawesome/free-solid-svg-icons"


export default function Navbar() {
  function openMenu() {
    let menu = document.querySelector("#menu-bars");
    let navbar = document.querySelector(".navbar__items");
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
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
          <div className="navbar__items" id="menu">
            <ul>
              <Link href={{ pathname: "/Home" }}>
                <a className="">Home</a>
              </Link>
              <Link href={{ pathname: "/" }}>
                <a className="">Blog</a>
              </Link>
              <Link href={{ pathname: "/CV" }}>
                <a className="">CV</a>
              </Link>
            </ul>
          </div>
          <div className="navbar__icon">
          <FontAwesomeIcon className="i color1" icon={faBars} id="menu-bars" onClick={openMenu} />
          </div>
        </section>
      </navbar>
    </header>
  );
}

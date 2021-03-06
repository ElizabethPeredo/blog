import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
  return (
    <footer className="footer__container">
      <section className="footer__container-info">
        <div className="footer__container-info1">
          <h2 className="">Contact</h2>
          <div className="">
            <p className="">elizabethperedo@outlook.es</p>
          </div>
        </div>

        <div className="footer__container-info2">
          <h2 className="">Connect</h2>
          <div className="footer__container-info2-icon">
            <div className="">
              <span className="i"><FontAwesomeIcon className="" icon={faFacebook} /></span>
            </div>
            <div className="">
              <span className="i"><FontAwesomeIcon className="" icon={faTwitter} /></span>
            </div>
          </div>
        </div>
      </section>
      <section className="footer__container-copy">
        © 2022 | Design by
        <Link href="/">
          <a href=""> Elizabeth Peredo</a>
        </Link>
      </section>
    </footer>
  );
}

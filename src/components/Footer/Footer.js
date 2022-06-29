import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer__container">
      <section className="footer__container-info">
        <div className="footer__container-info1">
          <h2 className="">Contact</h2>
          <div className="">
            <i className="fas fa-map-marker-alt"></i>
            <p className="">Elizabeth Peredo</p>
          </div>
          <div className="">
            <i className="fas fa-envelope"></i>
            <p className="">elizabethperedo@outlook.es</p>
          </div>
        </div>

        <div className="footer__container-info2">
          <h2 className="">Connect</h2>
          <div className="">
            <div className="">
              <i className="fab fa-facebook-f"></i>
              <a className="" href="">
                Like us on Facebook
              </a>
            </div>
            <div className="">
              <i className="fab fa-twitter"></i>
              <a className="" href="">
                Like us on Twiter
              </a>
            </div>

            <div className="">
              <i className="fab fa-pinterest"></i>
              <a className="" href="">
                Follow us on Pinterest
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="footer__container-copy">
        © 2022 | Design by  
        <a className=""> Elizabeth Peredo</a>
      </section>
    </footer>
  );
}

import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
    function Modal() {
        if (typeof window === 'object') {
            document.querySelectorAll("img").forEach((img) => {
                img.className += " myImages";
            });

            var modal = document.getElementById('modal_img');

            var images = document.getElementsByClassName('myImages');

            var modalImg = document.getElementById("img01");

            var captionText = document.getElementById("modal_caption");

            for (var i = 0; i < images.length; i++) {
                var img = images[i];
                img.onclick = function (evt) {
                    modal.style.display = "block";
                    modalImg.src = this.src;
                    captionText.innerHTML = this.alt;
                }
            }

            var span = document.getElementsByClassName("close")[0];

            span.onclick = function () {
                modal.style.display = "none";
            }
        }
    }
    Modal();
    return (
        <>
            <div id="modal_img" className="modal__container">
                <span className="close">&times;</span>
                <img className="modal__container-img" id="img01" />
                <div id="modal_caption"></div>
            </div>
        </>
    );
}

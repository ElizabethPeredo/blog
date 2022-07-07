import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons"

export default function Modal() {
    function ModalImg() {
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

            window.onload = function () {
                const btnClose = document.getElementsByClassName("closeImg")[0];

                btnClose.onclick = function click() {
                    modal.style.display = "none";
                }
            }
        };
    }

    ModalImg();
    return (
        <>
            <div id="modal_img" className="modal__container">
                <span className="closeImg">&times;</span>
                <img className="modal__container-img" id="img01" />
                <div id="modal_caption"></div>
            </div>
        </>
    );
}

import React from 'react'

export default function CardContainer() {
    function open_details() {
        var details = document.querySelectorAll("details");  
            var D = Array.from(details);
    
            for (let i = 0; i < D.length; i++) {
                D[i].open = true;
            }  
    }
  return (
    <>
        <button id="btn_open" onClick={open_details} className="btn_open_true">Abrir todos</button>
    </>
  )
}
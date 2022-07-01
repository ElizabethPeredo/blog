import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faEnvelope, faUser, faMap, faPrint } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"


export default function CV() {
    function printArea() {
        window.print();
    }
    return (

        <>
            <section classNameName="container__medium">
                <div className="btn-print">
                    <FontAwesomeIcon icon={faPrint} className="btn" onClick={() => window.print()}/>
                </div>

                <section className="container__resume container__resume-left-right" id="areaPrint">
                    <main className="resume_left">

                        <div className="resume_profile">
                            <img src="/img/resume/ElizabethPeredo.jpeg"
                                alt="profile_pic" />
                            <div className="profile_info">
                                <h1>Elizabeth Evelin Peredo Mescco</h1>
                                <p>Bachiller en Economía y Junior Developer (JAVA)</p>
                            </div>
                        </div>

                        <div className="resume_content">
                            <div className="resume_info">
                                <ul>
                                    <li>
                                        <div className="">
                                            <span className="i"><FontAwesomeIcon icon={faMap} /></span>
                                        </div>
                                        <div className="data">
                                            Cusco, Perú
                                        </div>
                                    </li>
                                    <li>
                                        <div className="">
                                            <span className="i">
                                                <FontAwesomeIcon icon={faEnvelope} />
                                            </span>
                                        </div>
                                        <div className="data">
                                            elizabethperedo@outlook.es
                                        </div>
                                    </li>
                                    <li>
                                        <div className="">
                                            <span className="i"><FontAwesomeIcon icon={faUser} /></span>
                                        </div>
                                        <div className="data">
                                            <a href="./">CurriculumVitae</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="resume_skills">
                            <div className="title">
                                <h2>Skills</h2>
                            </div>
                            <ul>
                                <li>
                                    <div className="skill_name">
                                        HTML
                                    </div>
                                    <div className="skill_progress">
                                        <span></span>
                                    </div>

                                </li>
                                <li>
                                    <div className="skill_name">
                                        CSS
                                    </div>
                                    <div className="skill_progress">
                                        <span></span>
                                    </div>

                                </li>
                                <li>
                                    <div className="skill_name">
                                        JAVA
                                    </div>
                                    <div className="skill_progress">
                                        <span></span>
                                    </div>

                                </li>

                                <li>
                                    <div className="skill_name">
                                        EXCEL
                                    </div>
                                    <div className="skill_progress">
                                        <span></span>
                                    </div>

                                </li>

                                <li>
                                    <div className="skill_name">
                                        MySQL
                                    </div>
                                    <div className="skill_progress">
                                        <span></span>
                                    </div>

                                </li>

                                <li>
                                    <div className="skill_name">
                                        Inversiones
                                    </div>
                                    <div className="skill_progress">
                                        <span></span>
                                    </div>

                                </li>

                            </ul>
                        </div>

                        <div className="resume_skills">
                            <div className="title">
                                <h2>Languages</h2>
                            </div>
                            <ul>
                                <li>
                                    <div className="skill_name">
                                        Spanish
                                    </div>
                                    <div className="skill_progress">
                                        <span></span>
                                    </div>
                                    <div className="skill_per">100%</div>
                                </li>
                                <li>
                                    <div className="skill_name">
                                        English
                                    </div>
                                    <div className="skill_progress">
                                        <span></span>
                                    </div>
                                    <div className="skill_per">75%</div>
                                </li>
                            </ul>
                        </div>

                        <div className="resume_social">
                            <div className="title">
                                <h2>Social</h2>
                            </div>
                            <ul>
                                <li>
                                    <div className="">
                                        <span className="i"><FontAwesomeIcon icon={faLinkedin} /></span>
                                    </div>
                                    <div className="data">
                                        <h2>Linkedin</h2>
                                        <a href="https://www.linkedin.com/">ElizabethPeredo@linkedin</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </main>

                    <main className="resume_right">
                        <div className="resume_item">
                            <div className="title">
                                <h2>About me</h2>
                            </div>
                            <p>
                                Bachiller en Economía. Responsable, con aptitudes para el trabajo en equipo. Con estudios en informática. Mi objetivo principal es evolucionar y desarrollarme profesionalmente.
                            </p>
                        </div>

                        <div className="resume_item">
                            <div className="title">
                                <h2>Work Experience</h2>
                            </div>
                            <ul>
                                {/*
                                <li>
                                    <div className="date">Diciembre 2019 - Setiembre 2021</div>
                                    <div className="info">
                                        <h2>FAMACORP E. I. R. L.</h2>

                                        <ul>
                                            <li>Apoyo técnico en la formulación, evaluación y ejecución de proyectos de
                                                inversión e IOARR, en el marco de la normatividad vigente.
                                            </li>
                                        </ul>
                                    </div>                            
                                </li>
                                <li>
                                    <div className="date">Julio 2021 - Diciembre 2021</div>
                                    <div className="info">
                                        <h2>Smart Management Institute</h2>

                                        <ul>
                                            <li>Apoyo técnico en la formulación, evaluación de proyectos de
                                                inversión.
                                            </li>
                                        </ul>
                                    </div>

                                </li>
                                */}
                                <li>
                                    <div className="date">  Octubre 2021 - Actualidad</div>
                                    <div className="info">
                                        <h2>Ministery of Culture - Unidad Ejecutora - Proyectos Especiales 008</h2>

                                        <ul>
                                            <li>Servicio profesional de seguimiento y monitoreo a la ejecución de la cartera de inversiones encargada a la Unidad Ejecutora N° 008 – Proyectos Especiales durante al 1er semestre 2022, para la actualización del sustento de la demanda
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="resume_item">
                            <div className="title">
                                <h2>Education</h2>
                            </div>
                            <ul>
                                <li>
                                    <div className="date">Junio 2015 - 2020</div>
                                    <div className="info">
                                        <a href="https://www.uandina.edu.pe/">
                                            <h2>Universidad Andina del Cusco</h2>
                                        </a>
                                        <p>*Economista, Diciembre 2020</p>
                                        <p>*Bachiller en Economía, Marzo 2021</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="date">Julio 2018 - 2020</div>
                                    <div className="info">
                                        <a href="http://isc.unsaac.edu.pe/">
                                            <h2>Instituto de Sistemas Cusco de la Universidad Nacional de San Antonio Abad del
                                                Cusco</h2>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </main>
                </section>

                <section className="container__resume">
                    <main className="resume_center">
                        <div className="">
                            <h1>HOJA DE VIDA</h1>
                            <ul>
                                <li><b>Nombres y Apellidos:</b> Elizabeth Evelin Peredo Mescco</li>
                                <li><b>Fecha de Nacimiento:</b> 29 de Octubre de 1997</li>
                                <li><b>DNI:</b> 75477608</li>
                                <li><b>Email:</b> elizabethperedo@outlook.es</li>
                            </ul>
                        </div>

                        <div className="">
                            <h2>RESUMEN PROFESIONAL:</h2>
                            <p>
                                Bachiller en Economia con conocimiento en desarrollo de software. Cuento con una gran capacidad de análisis de la información. Soy una profesional autodidacta, analítica y organizada, habituada a un alto nivel de exigencia.
                            </p>
                        </div>

                        <div className="resume_item">
                            <h2>FORMACIÓN ACADEMICA:</h2>
                            <ul>
                                <li>
                                    <div className="date">Junio 2015 - 2020
                                    </div>
                                    <div className="info">
                                        <a href="https://www.uandina.edu.pe/">
                                            <h2>Universidad Andina del Cusco</h2>
                                        </a>
                                        <p>*Economista, Diciembre 2020</p>
                                        <p>*Bachiller en Economía, Marzo 2021
                                            <a className="image-link" href="https://elizabethperedo.github.io/CurriculumVitae"
                                                alt="">
                                            </a>
                                            <a className="">
                                                <FontAwesomeIcon icon={faLink} />
                                            </a>
                                        </p>
                                    </div>
                                </li>

                                <li>
                                    <div className="date">Julio 2018 - 2020</div>
                                    <div className="info">
                                        <a href="http://isc.unsaac.edu.pe/">
                                            <h2>Instituto de Sistemas Cusco de la Universidad Nacional de San Antonio Abad del
                                                Cusco</h2>
                                        </a>
                                        <ul>
                                            <li>Módulo 1: Operador de Computadoras
                                                <a className="image-link"
                                                    href="./img/certificates/Modulo1.JPG"
                                                    alt="">
                                                </a>
                                                <a className=""><FontAwesomeIcon icon={faLink} />
                                                </a>
                                            </li>

                                            <li>Módulo 2: Operador de sistemas contables
                                                <a className="image-link"
                                                    href="./img/certificates/Modulo2.JPG"
                                                    alt="">
                                                </a>
                                                <a className=""><FontAwesomeIcon icon={faLink} />
                                                </a>
                                            </li>
                                            <li>Módulo 3: Técnico en redes
                                                <a className="image-link"
                                                    href="./img/certificates/Modulo3.JPG"
                                                    alt="">
                                                </a>
                                                <a className=""><FontAwesomeIcon icon={faLink} />
                                                </a>

                                            </li>
                                            <li>Módulo 4: Programador de computadoras
                                                <a className="image-link"
                                                    href="./img/certificates/Modulo4.jpg"
                                                    alt="">
                                                </a>
                                                <a className=""><FontAwesomeIcon icon={faLink} />
                                                </a>
                                            </li>
                                            <li>Módulo 5: Analista de sistemas
                                                <a>
                                                </a>
                                                <a className=""><FontAwesomeIcon icon={faLink} />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="resume_item">
                            <h2>IDIOMAS:</h2>
                            <ul>
                                <li>
                                    <div className="info">
                                        <h2>Inglés (básico). Instituto Cultural Peruano Norteamericano - Cusco</h2>
                                        <h2>Inglés (intermedio). Instituto Cultural Peruano Norteamericano - Cusco</h2>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </main>
                </section>

                <section className="container__resume">
                    <main className="resume_center">
                        <div className="resume_item">
                            <h2>HERRAMIENTAS INFORMÁTICAS:</h2>
                            <ul>
                                <li>
                                    <div className="info">
                                        <h2>Competencias Digitales y tecnologías de información
                                            <a className="image-link"
                                                href="./img/certificates/cenfoti_uac.JPG">
                                            </a>
                                            <a className=""><FontAwesomeIcon icon={faLink} />
                                            </a>

                                        </h2>
                                        <h4>Institución: CENFOTI - Universidad Andina del Cusco</h4>
                                    </div>
                                    <ul>
                                        <li>Conocimiento de Fundamentos de computación</li>
                                        <li>Conocimiento de Fundamentos de Aplicaciones en línea</li>
                                        <li>Procesadores de Texto</li>
                                        <li>Hojas de Cálculo</li>
                                    </ul>
                                    <br />
                                </li>
                            </ul>
                        </div>

                        <div className="resume_item">
                            <h2>OTROS CURSOS:</h2>
                            <ul>
                                <li>
                                    <div className="info">
                                        <h2>1. Proyectos:</h2>
                                        <ul>
                                            <li>Contrataciones del Estado
                                                <a href="./img/certificates/C1.jpg">
                                                </a>
                                                <a className="">
                                                    <FontAwesomeIcon icon={faLink} />
                                                </a>
                                            </li>

                                            <li>Curso de Fundamentos de Gestión de Proyectos
                                                <a href="./img/certificates/diploma-gestion-1.png">
                                                </a>
                                                <a className="">
                                                    <FontAwesomeIcon icon={faLink} />
                                                </a>
                                            </li>

                                            <li>Curso de Gestión de Proyectos con PMBOK
                                                <a href="./img/certificates/diploma-proyectos-pmbok-1.png">
                                                </a>
                                                <a className="">
                                                    <FontAwesomeIcon icon={faLink} />
                                                </a>
                                            </li>

                                            <li>Curso de Planificación de Proyectos
                                                <a href="./img//certificates/diploma-planificacion-proyectos-1.png">
                                                </a>
                                                <a className="">
                                                    <FontAwesomeIcon icon={faLink} />
                                                </a>
                                            </li>

                                            <li>Curso de Seguimiento y Cierre de Proyectos
                                                <a href="./img/certificates/diploma-seguimiento-proyectos-1.png">
                                                </a>
                                                <a className="">
                                                    <FontAwesomeIcon icon={faLink} />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </main>
                </section>

                <section className="container__resume">
                    <main className="resume_center">
                        <div className="resume_item">
                            <ul>
                                <li>
                                    <div className="info">
                                        <h2>2. Software Developer</h2>
                                        <ul>
                                            <h2>Python</h2>
                                            <li>Curso Básico de Python
                                                <a className="image-link"
                                                    href="./img/certificates/diploma-python_001.jpg"
                                                    alt="">
                                                </a>
                                                <a className="">
                                                    <FontAwesomeIcon icon={faLink} />
                                                </a>
                                            </li>

                                            <li>Curso de Python Intermedio
                                                <a className="image-link"
                                                    href="./img/certificates/diploma-python-intermedio_001.jpg"
                                                    alt="">
                                                </a>
                                                <a className="">
                                                    <FontAwesomeIcon icon={faLink} />
                                                </a>
                                            </li>

                                            <h2>JavaScript</h2>

                                            <li>Curso Básico de JavaScript
                                                <a className="image-link"
                                                    href="./img/certificates/diploma-basico-javascript_001.jpg"
                                                    alt="">
                                                </a>
                                                <a className="">
                                                    <FontAwesomeIcon icon={faLink} />
                                                </a>
                                            </li>

                                            <li>FrontEnd Developer
                                                <a className="image-link"
                                                    href="./img/certificates/diploma-frontend-developer-2019_001.jpg"
                                                    alt="">
                                                </a>
                                                <a className="">
                                                    <FontAwesomeIcon icon={faLink} />
                                                </a>
                                            </li>

                                            <h2>Azure</h2>
                                            <li>Introducción a la nube con Azure
                                                <a className="image-link"
                                                    href="./img/certificates/diploma-introduccion-azure_001.jpg"
                                                    alt="">
                                                </a>
                                                <a className="">
                                                    <FontAwesomeIcon icon={faLink} />
                                                </a>
                                            </li>

                                            <h2>Otros</h2>

                                            <li>Curso de Administración de Servidores Linux
                                                <a className="image-link"
                                                    href="./img/certificates/diploma-linux_001.jpg"
                                                    alt="">
                                                </a>
                                                <a className="">
                                                    <FontAwesomeIcon icon={faLink} />
                                                </a>
                                            </li>

                                            <li>Fundamentos de Ingeniería de Software
                                                <a className="image-link"
                                                    href="./img/certificates/diploma-ingenieria_001.jpg"
                                                    alt="">
                                                </a>
                                                <a className="">
                                                    <FontAwesomeIcon icon={faLink} />
                                                </a>
                                            </li>

                                            <li>Curso de Introducción a la Terminal y Línea de comandos
                                                <a className="image-link"
                                                    href="./img/certificates/diploma-terminal_001.jpg"
                                                    alt="">
                                                </a>
                                                <a className="">
                                                    <FontAwesomeIcon icon={faLink} />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </main>
                </section>

            </section>
        </>
    )
}

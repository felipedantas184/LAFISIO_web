import React, { useState } from 'react';

import { Link as LinkS } from 'react-scroll';

import menu from '../../assets/ImagesLafisio/menu.svg';
import logo from '../../assets/ImagesLafisio/Logo.png';
import heroSVG from '../../assets/ImagesLafisio/heroSVG.svg';
import teamGoals from '../../assets/ImagesLafisio/teamGoals.svg';
import ensino from '../../assets/ImagesLafisio/ensino.svg';
import pesquisa from '../../assets/ImagesLafisio/pesquisa.svg';
import extensao from '../../assets/ImagesLafisio/extensao.svg';
import projects from '../../assets/ImagesLafisio/projects.svg';
import squadSvg from '../../assets/ImagesLafisio/squadSvg.svg';
import contactSvg from '../../assets/ImagesLafisio/contactSvg.svg';
import email from '../../assets/ImagesLafisio/email.svg';
import facebook from '../../assets/ImagesLafisio/facebook.svg';
import instagram from '../../assets/ImagesLafisio/instagram.svg';
import iphone from '../../assets/ImagesLafisio/iphone (3).png';

import Carminha from '../../assets/ImagesLafisio/PP/Carminha.jpg';
import Luciano from '../../assets/ImagesLafisio/PP/Luciano.jpg';
import Francisco from '../../assets/ImagesLafisio/PP/Francisco.jpg';
import Alessandro from '../../assets/ImagesLafisio/PP/Alessandro.jpg';
import João from '../../assets/ImagesLafisio/PP/João.jpg';
import Guilherme from '../../assets/ImagesLafisio/PP/Guilherme.jpg';
import Arlys from '../../assets/ImagesLafisio/PP/Arlys.jpg';
import Iury from '../../assets/ImagesLafisio/PP/Iury.jpg';
import Gabriel from '../../assets/ImagesLafisio/PP/Gabriel.jpg';
import Felipe from '../../assets/ImagesLafisio/PP/Felipe.jpg';

import './styles.css';

function Lafisio() {
    const [isOpened, setIsOpened] = useState(false);

    const toggle = () => {
        setIsOpened(!isOpened);
    }

    return (
        <>
            <nav className="navBar">
                <div className="navBarContainer">
                        <p className="navLink">LAFISIO</p>

                        <img src={logo} alt="menu" className="logoCorner"/>
                </div>
            </nav>


            <div className="heroSection" id="heroSection">
                <div className="heroSectionContainer">
                    <div className="heroOne">
                        <img className="heroLogo" src={logo} alt="Lafisio Logo" />
                        <h1 className="heroTitle">LAFISIO</h1>
                        <p className="heroTop">LIGA ACADÊMICA DE FISIOLOGIA - UFPI</p>

                        
                        <a href="https://www.instagram.com/laaiufpi/" target="blank" className="buttonWrapper">
                            <p className="ButtonText">Inscrição - Porcesso Seletivo 2021</p>
                        </a>
                        <a href="https://www.instagram.com/laaiufpi/" target="blank" className="buttonWrapper">
                            <p className="ButtonText">Edital - Porcesso Seletivo 2021</p>
                        </a>
                        <a href="https://www.instagram.com/laaiufpi/" target="blank" className="buttonWrapper">
                            <p className="ButtonText">Apresentação da Liga - PDF</p>
                        </a>
                    </div>

                    <img className="heroSvg" src={heroSVG} alt="Lafisio Hero" />
                    
                </div>
            </div>


            <div className="sectionOne" id="sectionOne">
                <div className="sectionOneContainer">
                    <div className="topCornerOne"></div>

                    <h1 className="sectionTopTitle">NOSSA MISSÃO</h1>

                    <img src={teamGoals} className="oneSvg" />
                    

                    <div className="sectionGroup">
                        <h1 className="sectionTitle">QUEBRAR BARREIRAS</h1>
                        <p className="sectionDescription">Nosso objetivo é expandir os horizontes da Fisiologia no âmbito acadêmico por meio de diversas ações dentro da Liga!</p>
                        <p className="sectionDescription">Fomentar projetos de ensino, pesquisa e extensão é o foco da LAFISIO!</p>
                        
                        <div className="iconsWrapper">
                            <img src={ensino} alt="ensino" className="iconsOne" />
                            <img src={pesquisa} alt="pesquisa" className="iconsOne" />
                            <img src={extensao} alt="extensao" className="iconsOne" />
                        </div>

                        <a href="https://www.instagram.com/laaiufpi/" target="blank" className="buttonWrapperTwo">
                            <p className="buttonText">Conheça @lafisio.ufpi</p>
                        </a>
                    </div>
                </div>
            </div>


            <div className="sectionProj" id="sectionProj">
                <div className="sectionProjContainer">
                    <h1 className="sectionTopTitleWhite">PROJETOS</h1>

                    <div className="topCornerProj"></div>

                    <div className="boxiGroup">
                        <div className="boxiUnit">
                            <img className="boxiIcon" src={ensino}/>
                            <div>
                                <p className="boxiName">Ensino</p>
                                <p className="boxiDescription">As reuniões de ensino abordam vários  temas da Fisiologia e buscam a participação ativa dos ligantes!</p>
                            </div>
                        </div>

                        <div className="boxiUnit">
                            <img className="boxiIcon" src={pesquisa}/>
                            <div>
                                <p className="boxiName">Pesquisa</p>
                                <p className="boxiDescription"> A LAFISIO busca sempre contato com os professores a fim de desenvolver novos projetos!</p>
                            </div>
                        </div>

                        <div className="boxiUnit">
                            <img className="boxiIcon" src={extensao}/>
                            <div>
                                <p className="boxiName">Extensão</p>
                                <p className="boxiDescription">A nossa Liga  tem por objetivo levar o conhecimento para além da Universidade!</p>
                            </div>
                        </div> 
                    </div>

                    <img className="projectsSvg" src={projects} alt="Lafisio Hero" />
                </div>
            </div>


            <div className="sectionTwo" id="sectionTwo">
                <div className="sectionTwoContainer">
                    <h1 className="sectionTopTitleBlue">DIRETORIA</h1>

                    <div className="topCornerTwo"></div>

                    <div className="teachersGroup">
                        <div className="teachersUnit">
                            <div className="picDiv"></div>
                            <img src={Carminha} className="teachersPic" />
                            <strong className="teachersName">Maria do Carmo</strong>
                            <p className="teachersFunction">Orientadora</p>
                        </div>

                        <div className="teachersUnit">
                        <div className="picDiv"></div>
                            <img src={Luciano} className="teachersPic" />
                            <strong className="teachersName">Luciano da Silva</strong>
                            <p className="teachersFunction">Co-orientador</p>
                        </div>
                    </div>

                    <div className="directorsGroup">
                        <div className="directorsUnit">
                            <div className="picDivTwo"></div>
                            <img src={Francisco} className="directorsPic" />
                            <strong className="directorsName">Francisco Gabriel</strong>
                            <p className="directorsFunction">Presidente</p>
                        </div>

                        <div className="directorsUnit">
                            <div className="picDivTwo"></div>
                            <img src={Alessandro} className="directorsPic" />
                            <strong className="directorsName">Alessandro Henrique</strong>
                            <p className="directorsFunction">Vice-Presidente</p>
                        </div>

                        <div className="directorsUnit">
                            <div className="picDivTwo"></div>
                            <img src={João} className="directorsPic" />
                            <strong className="directorsName">João Gabriel</strong>
                            <p className="directorsFunction">Ensino</p>
                        </div>

                        <div className="directorsUnit">
                            <div className="picDivTwo"></div>
                            <img src={Guilherme} className="directorsPic" />
                            <strong className="directorsName">Guilherme Lima</strong>
                            <p className="directorsFunction">Pesquisa</p>
                        </div>

                        <div className="directorsUnit">
                            <div className="picDivTwo"></div>
                            <img src={Arlys} className="directorsPic" />
                            <strong className="directorsName">Arlys Emanuel</strong>
                            <p className="directorsFunction">Extensão</p>
                        </div>

                        <div className="directorsUnit">
                            <div className="picDivTwo"></div>
                            <img src={Iury} className="directorsPic" />
                            <strong className="directorsName">Iury Lorenzo</strong>
                            <p className="directorsFunction">Financeiro</p>
                        </div>

                        <div className="directorsUnit">
                            <div className="picDivTwo"></div>
                            <img src={Gabriel} className="directorsPic" />
                            <strong className="directorsName">Gabriel Soares</strong>
                            <p className="directorsFunction">Administrativo</p>
                        </div>

                        <div className="directorsUnit">
                            <div className="picDivTwo"></div>
                            <img src={Felipe} className="directorsPic" />
                            <strong className="directorsName">Felipe Dantas</strong>
                            <p className="directorsFunction">Marketing</p>
                        </div>
                    </div>

                    <img className="squadSvg" src={squadSvg} alt="Lafisio Hero" />
                </div>
            </div>


            <div className="sectionThree" id="sectionThree">
                <div className="sectionThreeContainer">
                    <h1 className="sectionTopTitleWhite">CONTATO</h1>

                    <div className="topCornerThree"></div>

                    <img className="contactSvg" src={contactSvg} alt="Lafisio Hero" />

                    <div className="sectionGroup">
                    <h1 className="sectionTitleWhite">QUEBRAR BARREIRAS</h1>
                        <p className="sectionDescriptionWhite">Estamos presentes em várias redes sociais prontos para te conhecer e para tirar suas dúvidas! Clique e descubra!</p>
                        <div className="contactBox">
                            <img src={email} alt="email" />
                            <p className="contactText">lafisio.ufpi@gmail.com</p>
                        </div>

                        

                        <div className="phoneGroup">
                            <div>
                               <a href="https://www.instagram.com/laaiufpi/" target="blank" className="contactBox">
                                    <img src={facebook} alt="facebook" />
                                    <p className="contactText">Facebook LAFISIO</p>
                                </a>

                               <a href="https://www.instagram.com/laaiufpi/" target="blank" className="contactBox">
                                    <img src={instagram} alt="instagram" />
                                    <p className="contactText">Instagram LAFISIO</p>
                                </a>
                            
                                <a href="https://www.instagram.com/laaiufpi/" target="blank" className="buttonWrapperThree">
                                    <p className="buttonTextThree">Siga @lafisio.ufpi</p>
                                </a>
                            </div>
                            <img src={iphone} alt="Instagram Lafisio" className="iphone"/>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="footer">
                <div className="footerContainer">
                    <div className="footerOne">
                        <div className="logoGroup">
                            <img src={logo} className="logoImg"/>
                            <h1 className="footerLogo">LAFISIO</h1>
                        </div>
                    </div>

                    <div className="footerLinks">
                        <LinkS  to="heroSection" className="footerLink"
                            smooth={true} duration={500} spy={true} offset={-120}
                        >
                            Links Importantes
                        </LinkS>
                        <LinkS  to="sectionOne" className="footerLink"
                            smooth={true} duration={500} spy={true} offset={-60}
                        >
                            Nossa Missão
                        </LinkS>
                        <LinkS  to="sectionProj" className="footerLink"
                            smooth={true} duration={500} spy={true} offset={-60}
                        >
                            Nossos Projetos
                        </LinkS>
                        <LinkS  to="sectionTwo" className="footerLink"
                            smooth={true} duration={500} spy={true} offset={-60}
                        >
                            Diretoria
                        </LinkS>
                    </div>

                    <div className="footerTwo">
                        <p>LAFISIO UFPI © 2021 - Felipe Dantas.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Lafisio;

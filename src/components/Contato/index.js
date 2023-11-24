import React from 'react';
import { Element } from "react-scroll";
import SerenibotIcon from '../../imgs/SereniBOT_logo.png'
import Matheus from '../../imgs/time/Matheus.png'
import Vinicius from '../../imgs/time/Vinicius.png'
import WppIcon from "../../imgs/icons/whatsapp-icon.png";
import EmailIcon from "../../imgs/icons/email-icon.png";
import './contato.scss'

function Contato() {

    const handleEmailClick = () => {
        window.location.href = 'mailto:ContatoGaloFiap@gmail.com';
    };

    const sendWppClick = () => {
        window.location.href = 'https://wa.me/+5511963752185';
    };

    return (
        <>
            <Element name='Sobre'>
                <div className="SobreContainer">
                    <h1>Sobre nós</h1>
                    <div className="SbrContainer">
                        <div className="SobreImg">
                            <img
                                src={SerenibotIcon}
                                alt="Icone da logo marca">
                            </img>
                        </div>
                        <div className="SobreTxT">
                            <p> No cerne do nosso programa está o compromisso de oferecer suporte essencial para aqueles que 
                                enfrentam depressão e ansiedade. O nosso chatbot, criado para acalmar crises, visa proporcionar 
                                um espaço seguro e acolhedor, utilizando conversas empáticas para ajudar no alívio desses 
                                desafios emocionais. O nosso objetivo é oferecer uma ferramenta acessível, orientada para o 
                                bem-estar mental, ajudando indivíduos a encontrar conforto e suporte durante momentos difíceis.</p>
                        </div>
                    </div>
                </div>
                <div className="CardContainer">
                    <div className="Cards">
                        <img
                            src={Matheus}
                            alt="Integrante do grupo SereniBot">
                        </img>
                        <div className="CardContent">
                            <h2>Matheus Motta</h2>
                            <p>RM 550352</p>
                        </div>
                    </div>
                    <div className="Cards">
                        <img
                            src={Vinicius}
                            alt="Integrante do grupo SereniBot">
                        </img>
                        <div className="CardContent">
                            <h2>Vinicius Buzato</h2>
                            <p>RM 99125</p>
                        </div>
                    </div>
                </div>

            </Element>
            <Element name='Contato'>
                <div className="ContatoContainer">
                    <div className="InnerContatoContainer">
                        <div className="ContatoContainerHeader">
                            <p>Entre em contato</p>
                            <p>Nós adoraríamos ouvir você. Aqui como você pode chegar até nós</p>
                        </div>
                        <div className="CardsContainer">
                            <div className="SobreCardContainer">
                                <div className="SobreCardImgContainer">
                                    <img
                                        src={WppIcon}
                                        alt="Ícone de whatsApp">
                                    </img>
                                </div>
                                <div className="CardTextContainer">
                                    <p>Contato via WhatsApp</p>
                                    <p>Em caso de dúvidas, entre em contato!</p>
                                    <p>Nosso atendimento é das 08:00 as 18:00, com respostas em até 24 horas durante dias úteis</p>
                                    <button onClick={sendWppClick}>Clique aqui</button>
                                </div>
                            </div>
                            <div className="SobreCardContainer">
                                <div className="SobreCardImgContainer">
                                    <img
                                        src={EmailIcon}
                                        alt="Ícone de email">
                                    </img>
                                </div>
                                <div className="CardTextContainer">
                                    <p>Contato via Email</p>
                                    <p>Em caso de dúvidas, entre em contato!</p>
                                    <p>Seu email será respondido em até 24 horas durante dias úteis</p>
                                    <button onClick={handleEmailClick}>Clique aqui</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        </>
    );
}

export default Contato;
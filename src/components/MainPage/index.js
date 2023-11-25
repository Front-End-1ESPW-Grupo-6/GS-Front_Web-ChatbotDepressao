import React from 'react';
import { Element } from 'react-scroll';
import roboPNG from '../../imgs/imagem_capa.jpg';
import solucaoImagem from '../../imgs/bot_icon.png';
import Impessoalidade from '../../imgs/impessoalidade.png';
import Validacao from '../../imgs/validacao.png';
import Seguranca from '../../imgs/seguranca-de-dados.png';
import disponibilidade from '../../imgs/suporte-24-horas.png';
import UtilizacaoImagem from '../../imgs/o_que_fara.png'
import FuncionamentoImagem from '../../imgs/dispositivos.png'
import './mainpage.scss'

function MainPage() {
    return (
        <>
            <Element name="Home" id="Home">
                <div>
                    <div className="HomeContainer">
                        <div className="HomeTxt1">
                            <p>SereniBOT</p>
                        </div>
                        <div className="HomeImg">
                            <img
                                src={roboPNG}
                                alt='gif sustentabilidade'></img>
                        </div>
                        <div className="HomeTxt2">
                            <p>Conversas que acalmam, apoio que transforma</p>
                            <p>SereniBOT é um assistente virtual dedicado a oferecer apoio para aqueles que lidam com a depressão e ansiedade. 
                                Ele é um companheiro digital projetado para proporcionar suporte emocional e orientação. 
                                Através de conversas empáticas e personalizadas, o SereniBOT está aqui para oferecer alívio e ajudar 
                                a entender e lidar com os desafios das doenças mentais. </p>
                        </div>
                    </div>
                </div>
            </Element>
            <Element name="About" id="About">
                <div className="aboutContainer">
                    <div className="abtContainer">
                        <div className="aboutImg">
                            <img
                                src={solucaoImagem}
                                alt="Robo_Icon"></img>
                        </div>
                        <div className="aboutTxT">
                            <p>Sobre a solução</p>
                            <p>AnsioBOT é uma ferramenta digital que reúne informações de diversas fontes sobre técnicas de 
                                gestão de ansiedade. Este assistente virtual é projetado para oferecer suporte, por meio de 
                                conversas interativas, ajudando a compreender e gerenciar a ansiedade diária. Com recursos 
                                intuitivos, fornece estratégias personalizadas para o controle da ansiedade, oferecendo orientação 
                                e práticas de autocuidado. </p>

                        </div>
                    </div>
                </div>
                <div className='UtilizacaoContainer'>
                    <div className='UtiliContent'>
                        <div className='UtiliTxt'>
                            <p>O que ela fará?</p>
                            <p>O SereniBOT centraliza informações e orientações para cuidados com a saúde mental, 
                                auxiliando na busca por apoio emocional e redirecionando para recursos especializados quando necessário, 
                                proporcionando um suporte personalizado para o bem-estar emocional.</p>
                        </div>
                        <div className="UtiliImg">
                            <img
                                src={UtilizacaoImagem}
                                alt="UtiliImg"></img>
                        </div>
                    </div>
                </div>
            </Element>
            <Element name='Funcionamento' id='Funcionamento'>
                <div className='FuncionamentoContainer'>
                    <div className='FuncioContent'>
                        <div className='FuncioTxt'>
                            <p>Como funcionará?</p>
                            <p>O SereniBOT oferece suporte por meio de 
                                conversas para aqueles que buscam ajuda psicológica. Requer um cadastro básico 
                                para começar a utilizar. Este chatbot baseado em abordagens médicas funcionais 
                                oferece um espaço para conversas empáticas e orientações para pessoas lidando com 
                                desafios emocionais. É uma ferramenta valiosa para quem busca apoio e conforto emocional 
                                durante momentos difíceis.</p>
                        </div>
                        <div className="FuncioImg">
                            <img
                                src={FuncionamentoImagem}
                                alt="Dispositivos"></img>
                        </div>
                    </div>
                </div>
            </Element>
            <Element name='Solucao'>
                <div className="SolucaoContainer">
                    <h1>Solução</h1>
                    <div className="solucaoContent">
                        <div className="CardS">
                            <div className="Face1S">
                                <div className="Face1ContentS">
                                    <img
                                        src={Impessoalidade}
                                        alt="Impessoalidade"></img>
                                    <h3>Impessoalidade</h3>
                                </div>
                            </div>
                            <div className="Face2S">
                                <div className="Face2ContentS">
                                    <p> Ao conversar com o SereniBOT, você garante que não será julgado, apenas escutado e apoiado.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="CardS">
                            <div className="Face1S">
                                <div className="Face1ContentS">
                                    <img
                                        src={Validacao}
                                        alt="Validacao"></img>
                                    <h3>Abordagem validada</h3>
                                </div>
                            </div>
                            <div className="Face2S">
                                <div className="Face2ContentS">
                                    <p>O SereniBOT possui conhecimento das melhores abordagens psicológicas para lidar com doenças mentais.</p>
                                </div>
                            </div>
                        </div>
                        <div className="CardS">
                            <div className="Face1S">
                                <div className="Face1ContentS">
                                    <img
                                        src={Seguranca}
                                        alt="Seguranca"></img>
                                    <h3>Segurança</h3>
                                </div>
                            </div>
                            <div className="Face2S">
                                <div className="Face2ContentS">
                                    <p>O SereniBOT não armazena, nem questiona, por informações pessoais sensíveis. Seus dados estarão seguros!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="CardS">
                            <div className="Face1S">
                                <div className="Face1ContentS">
                                    <img
                                        src={disponibilidade}
                                        alt="disponibilidade"></img>
                                    <h3>A todo momento</h3>
                                </div>
                            </div>
                            <div className="Face2S">
                                <div className="Face2ContentS">
                                    <p>O SereniBOT está ativo 24 horas por dia. Ele estará aqui sempre que você precisar dele.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        </>
    );
}

export default MainPage
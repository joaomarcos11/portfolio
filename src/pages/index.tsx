import React from 'react';
import Head from 'next/head';
import PresentationCard from '../components/PresentationCard';
import PagesMenu from '../components/PagesMenu';

import { ContainerWrapper } from '../styles/components/ContainerWrapper';
import { ContainerMain } from '../styles/components/ContainerMain';
import { ContainerSection } from '../styles/components/ContainerSection';
import { PageHome } from '../styles/pages/Home';

import data from '../../data.json';
import { HorizontalRow } from '../styles/components/HorizontalRow';

// import fotoPerfil from '../assets/foto2.jpg';

// Adicionar Card Presentation (repetir nas outras pages, o card não carrega novamente)
// page => Home
//

const Home: React.FC = () => {
    const { personInfo, personCharacteristics } = data;
    const { name, role, email, dateBirth, address } = personInfo;

    return (
        <>
            <Head>
                <title>Portifólio</title>
            </Head>
            <ContainerWrapper>
                <ContainerMain>
                    <PresentationCard />

                    <div className="sectionPage">
                        <header className="sectionHead">
                            <nav>
                                <ul className="sectionNav">
                                    {/* Passar qual tab está ativa no momento */}
                                    <PagesMenu />
                                </ul>
                            </nav>
                            <h1 className="sectionTitle">Home</h1>
                        </header>

                        <ContainerSection>
                            <PageHome>
                                <section>
                                    {/* Estilizar direto no ContainerSection */}
                                    <h2>Sobre mim</h2>
                                    <p>
                                        Olá, eu sou o <strong>{name}</strong>
                                    </p>
                                    <p>
                                        Atuo profissionalmente como professor de
                                        programação e jogos na Escola Móbile
                                        Integral e faço de tudo um pouco dentro
                                        da minha iniciativa de ensino de
                                        programação, a Code Prestige. Tenho uma
                                        série de artigos publicados no Portal
                                        iMasters e três livros publicados pela
                                        Casa do Código. Também participo de
                                        eventos sobre programação pelo país.
                                    </p>
                                    <p>
                                        Minha missão é unir a tecnologia e a
                                        educação para um futuro melhor.
                                    </p>
                                </section>

                                <HorizontalRow />

                                <div className="sectionFlex">
                                    <section className="firstSection">
                                        <h2>Dados Pessoais</h2>
                                        <ul>
                                            <li>
                                                <span className="listTitle">
                                                    Nome
                                                </span>
                                                <span className="listValue">
                                                    {name}
                                                </span>
                                            </li>
                                            <li>
                                                <span className="listTitle">
                                                    Nascimento
                                                </span>
                                                <span className="listValue">
                                                    {dateBirth}
                                                </span>
                                            </li>
                                            <li>
                                                <span className="listTitle">
                                                    Endereço
                                                </span>
                                                <span className="listValue">
                                                    {address}
                                                </span>
                                            </li>
                                            <li>
                                                <span className="listTitle">
                                                    Email
                                                </span>
                                                <span className="listValue">
                                                    contato
                                                </span>
                                            </li>
                                        </ul>
                                    </section>
                                    <section className="secondSection">
                                        <h2>Idiomas</h2>
                                        <ul>
                                            <li>
                                                <span className="listTitle2">
                                                    Português
                                                </span>
                                                <span className="listValue2">
                                                    Nativo
                                                </span>
                                            </li>
                                            <li>
                                                <span className="listTitle2">
                                                    Inglês
                                                </span>
                                                <span className="listValue2">
                                                    Fluente
                                                </span>
                                            </li>
                                        </ul>
                                    </section>
                                </div>

                                <HorizontalRow />

                                <div className="sectionFlex">
                                    <section className="firstSection">
                                        <h2>Características</h2>
                                        <ul className="listCharacteristics">
                                            {personCharacteristics.map(
                                                (item, index) => (
                                                    <li key={item}>{item}</li>
                                                )
                                            )}
                                        </ul>
                                    </section>
                                    <section className="secondSection">
                                        <h2>Stack</h2>
                                        <ul>
                                            <li>
                                                <span className="listTitle2">
                                                    Linguaguens
                                                </span>
                                                <span className="listValue2">
                                                    HTML5, CSS3, JavaScript
                                                    (ES6+)
                                                </span>
                                            </li>
                                            <li>
                                                <span className="listTitle2">
                                                    Frameworks
                                                </span>
                                                <span className="listValue2">
                                                    ReactJS, React Native,
                                                    Angular
                                                </span>
                                            </li>
                                        </ul>
                                    </section>
                                </div>
                            </PageHome>
                        </ContainerSection>
                    </div>
                </ContainerMain>
            </ContainerWrapper>
        </>
    );
};

export default Home;

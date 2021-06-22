import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import PresentationCard from '../components/PresentationCard';
import { ContainerWrapper } from '../styles/components/ContainerWrapper';
import { ContainerMain } from '../styles/components/ContainerMain';
import { ContainerSection } from '../styles/components/ContainerSection';
import { PageHome } from '../styles/pages/Home';
import { PagesUl } from '../styles/components/MenuNav';
import PagesMenu from '../components/PagesMenu';

// import fotoPerfil from '../assets/foto2.jpg';

// Adicionar Card Presentation (repetir nas outras pages, o card não carrega novamente)
// page => Home
//

const Home: React.FC = () => {
    return (
        <>
            <Head>
                <title>Portifólio</title>
            </Head>
            <ContainerWrapper>
                <ContainerMain>
                    <PresentationCard />

                    <ContainerSection>
                        <div className="sectionHead">
                            <h1 className="sectionTitle">Home</h1>
                            <nav>
                                <ul className="sectionNav">
                                    <PagesMenu />
                                </ul>
                            </nav>
                        </div>

                        <PageHome></PageHome>
                    </ContainerSection>
                </ContainerMain>
            </ContainerWrapper>
        </>
    );
};

export default Home;

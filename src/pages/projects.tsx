import React from 'react';
import Head from 'next/head';
import PresentationCard from '../components/PresentationCard';
import { ContainerWrapper } from '../styles/components/ContainerWrapper';
import { ContainerMain } from '../styles/components/ContainerMain';
import { ContainerSection } from '../styles/components/ContainerSection';
import { PageProjects } from '../styles/pages/Projects';
import PagesMenu from '../components/PagesMenu';

const Home: React.FC = () => {
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
                            <h1 className="sectionTitle">Projetos</h1>
                        </header>

                        <ContainerSection>
                            <PageProjects></PageProjects>
                        </ContainerSection>
                    </div>
                </ContainerMain>
            </ContainerWrapper>
        </>
    );
};

export default Home;

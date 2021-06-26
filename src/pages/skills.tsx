import React from 'react';
import Head from 'next/head';
import PresentationCard from '../components/PresentationCard';
import { ContainerWrapper } from '../styles/components/ContainerWrapper';
import { ContainerMain } from '../styles/components/ContainerMain';
import { ContainerSection } from '../styles/components/ContainerSection';
import { PageSkills } from '../styles/pages/Skills';
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

                    <ContainerSection>
                        <div className="sectionHead">
                            <h1 className="sectionTitle">Habilidades</h1>
                            <nav>
                                <ul className="sectionNav">
                                    {/* Passar qual tab está ativa no momento */}
                                    <PagesMenu />
                                </ul>
                            </nav>
                        </div>

                        <PageSkills></PageSkills>
                    </ContainerSection>
                </ContainerMain>
            </ContainerWrapper>
        </>
    );
};

export default Home;

import React from 'react';
import Head from 'next/head';
import PresentationCard from '../components/PresentationCard';
import { ContainerWrapper } from '../styles/components/ContainerWrapper';
import { ContainerMain } from '../styles/components/ContainerMain';
import { ContainerSection } from '../styles/components/ContainerSection';
import { PageSkills } from '../styles/pages/Skills';
import PagesMenu from '../components/PagesMenu';
import { AiOutlineMail } from 'react-icons/ai';

import data from '../../data.json';
import SkillCard from '../components/SkillCard';

const Home: React.FC = () => {
    const { skills } = data;
    const { hard, soft } = skills;
    const { languages, backend, frontend, mobile, database, test, tools, os } =
        hard;

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
                            <h1 className="sectionTitle">Habilidades</h1>
                        </header>
                        <ContainerSection>
                            <h2>Habilidades</h2>
                            <PageSkills>
                                <section>
                                    <h3>Hard Skills</h3>
                                    <ul>
                                        {languages.length > 0 && (
                                            <SkillCard
                                                iconName={AiOutlineMail}
                                                hardskill={languages}
                                            />
                                        )}
                                        {backend.length > 0 && (
                                            <SkillCard
                                                iconName={AiOutlineMail}
                                                hardskill={backend}
                                            />
                                        )}
                                        {frontend.length > 0 && (
                                            <SkillCard
                                                iconName={AiOutlineMail}
                                                hardskill={frontend}
                                            />
                                        )}
                                        {mobile.length > 0 && (
                                            <SkillCard
                                                iconName={AiOutlineMail}
                                                hardskill={mobile}
                                            />
                                        )}
                                        {database.length > 0 && (
                                            <SkillCard
                                                iconName={AiOutlineMail}
                                                hardskill={database}
                                            />
                                        )}
                                        {test.length > 0 && (
                                            <SkillCard
                                                iconName={AiOutlineMail}
                                                hardskill={test}
                                            />
                                        )}
                                        {tools.length > 0 && (
                                            <SkillCard
                                                iconName={AiOutlineMail}
                                                hardskill={tools}
                                            />
                                        )}
                                        {os.length > 0 && (
                                            <SkillCard
                                                iconName={AiOutlineMail}
                                                hardskill={os}
                                            />
                                        )}
                                    </ul>
                                </section>
                            </PageSkills>
                        </ContainerSection>
                    </div>
                </ContainerMain>
            </ContainerWrapper>
        </>
    );
};

export default Home;

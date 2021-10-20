import React from 'react';
import Head from 'next/head';
import PresentationCard from '../components/PresentationCard';

import { ContainerWrapper, ContainerMain, ContainerSection } from '../styles/components/Container';
import { PageSkills } from '../styles/pages/Skills';
import { AiOutlineMail } from 'react-icons/ai';

import data from '../service/data.json';
import SkillCard from '../components/SkillCard';
import { HorizontalRow } from '../styles/components/HorizontalRow';
import NavHeader from '../components/NavHeader';
import { useDataContext } from '../context/auth';
import SideMenu from '../components/SideMenu';

const Skills = () => {
    const { skills } = data;
    const { hard, soft } = skills;
    const { languages, backend, frontend, mobile, database, test, tools, os } = hard;

    const { navItems } = useDataContext();

    return (
        <>
            <Head>
                <title>Portifólio</title>
            </Head>
            <ContainerWrapper>
                <ContainerMain>
                    <PresentationCard />

                    <div className="sectionPage">
                        <header className="sectionHeader">
                            <NavHeader />
                            <h1 className="sectionTitle">
                                Habilidades
                            </h1>
                        </header>

                        <ContainerSection>
                            <h2>Habilidades</h2>
                            <PageSkills>
                                <section>
                                    <h3>Hard Skills</h3>
                                    <ul className="hardskills-list">
                                        {languages.length && (
                                            <SkillCard
                                                iconName={AiOutlineMail}
                                                hardskill={languages}
                                                title={'Linguagens:'}
                                            />
                                        )}
                                        {backend.length && (
                                            <SkillCard
                                                iconName={AiOutlineMail}
                                                hardskill={backend}
                                                title={'Back-End:'}
                                            />
                                        )}
                                        {frontend.length && (
                                            <SkillCard
                                                iconName={AiOutlineMail}
                                                hardskill={frontend}
                                                title={'Front-End:'}
                                            />
                                        )}
                                        {mobile.length && (
                                            <SkillCard
                                                iconName={AiOutlineMail}
                                                hardskill={mobile}
                                                title={'Mobile:'}
                                            />
                                        )}
                                        {database.length && (
                                            <SkillCard
                                                iconName={AiOutlineMail}
                                                hardskill={database}
                                                title={'BD:'}
                                            />
                                        )}
                                        {test.length && (
                                            <SkillCard
                                                iconName={AiOutlineMail}
                                                hardskill={test}
                                                title={'Teste:'}
                                            />
                                        )}
                                        {tools.length && (
                                            <SkillCard
                                                iconName={AiOutlineMail}
                                                hardskill={tools}
                                                title={'Ferramentas:'}
                                            />
                                        )}
                                        {os.length && (
                                            <SkillCard
                                                iconName={AiOutlineMail}
                                                hardskill={os}
                                                title={'SO:'}
                                            />
                                        )}
                                    </ul>
                                </section>

                                <HorizontalRow />

                                <section>
                                    <h3>Soft Skills</h3>
                                    <ul className="softskills-list">
                                        {soft.map(item => (
                                            <li>{item}</li>
                                        ))}
                                    </ul>
                                </section>
                            </PageSkills>
                        </ContainerSection>
                    </div>

                    <SideMenu navItems={navItems} />
                </ContainerMain>
            </ContainerWrapper>
        </>
    );
};

export default Skills;

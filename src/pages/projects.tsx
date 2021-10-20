import React from 'react';
import Head from 'next/head';
import PresentationCard from '../components/PresentationCard';

import { ContainerWrapper, ContainerMain, ContainerSection } from '../styles/components/Container';
import { PageProjects } from '../styles/pages/Projects';
import theme from '../styles/theme';

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaReact } from 'react-icons/fa';

import data from '../service/data.json';
import SideMenu from '../components/SideMenu';
import { useDataContext } from '../context/auth';
import NavHeader from '../components/NavHeader';

const Projects = () => {
    const { projects } = data;
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
                                Projetos
                            </h1>
                        </header>

                        <ContainerSection>
                            <h2>Projetos</h2>
                            <PageProjects>
                                <VerticalTimeline
                                    // layout="1-column-left"
                                    className="containerTimeline"
                                >
                                    {projects.map(exp => (
                                        <VerticalTimelineElement
                                            className="vertical-timeline-element--work"
                                            contentStyle={{
                                                background: exp.active
                                                    ? theme.dark
                                                          .jobActiveBalloon
                                                    : theme.dark.jobBalloon,
                                                color: theme.dark.text,
                                            }}
                                            contentArrowStyle={{
                                                borderRight: exp.active
                                                    ? `7px solid ${theme.dark.jobActiveBalloon}`
                                                    : `7px solid ${theme.dark.jobBalloon}`,
                                            }}
                                            date={exp.period}
                                            dateClassName="containerTimelineDate"
                                            iconStyle={{
                                                background: exp.active
                                                    ? theme.dark
                                                          .jobActiveBalloon
                                                    : theme.dark.jobBalloon,
                                                color: theme.dark.text,
                                            }}
                                            icon={<FaReact />}
                                        >
                                            <h3 className="timelineTitle">
                                                {exp.title}
                                            </h3>
                                            <h4 className="timelineSubtitle">
                                                {exp.role} | {exp.company}
                                            </h4>
                                            <p className="timelineDescription">
                                                {exp.description}
                                            </p>
                                        </VerticalTimelineElement>
                                    ))}

                                    <VerticalTimelineElement
                                        iconStyle={{
                                            background: 'rgb(16, 204, 82)',
                                            color: '#fff',
                                        }}
                                        icon={<FaReact />}
                                    />
                                </VerticalTimeline>
                            </PageProjects>
                        </ContainerSection>
                    </div>

                    <SideMenu navItems={navItems} />
                </ContainerMain>
            </ContainerWrapper>
        </>
    );
};

export default Projects;

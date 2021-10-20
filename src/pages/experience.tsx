import React from 'react';
import Head from 'next/head';

import PresentationCard from '../components/PresentationCard';

import { ContainerWrapper, ContainerMain, ContainerSection } from '../styles/components/Container';
import { PageExperience } from '../styles/pages/Experience';
import theme from '../styles/theme';

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaReact } from 'react-icons/fa';

import data from '../service/data.json';
import NavHeader from '../components/NavHeader';
import SideMenu from '../components/SideMenu';
import { useDataContext } from '../context/auth';

const Experience = () => {
    const { profissionalExp } = data;
    const { navItems } = useDataContext();

    return (
        <>
            <Head>
                <title>Experiência - João Marcos</title>
            </Head>
            <ContainerWrapper>
                <ContainerMain>
                    <PresentationCard />

                    <div className="sectionPage">
                        <header className="sectionHeader">
                            <NavHeader />
                            <h1 className="sectionTitle">
                                Experiência
                            </h1>
                        </header>

                        <ContainerSection>
                            <PageExperience>
                                <h2>Experiência Profissional</h2>

                                <VerticalTimeline
                                    layout="1-column-left"
                                    className="containerTimeline"
                                >
                                    {profissionalExp.map(exp => (
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
                                                {exp.role}
                                            </h3>
                                            <h4 className="timelineSubtitle">
                                                {exp.company}
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
                            </PageExperience>
                        </ContainerSection>
                    </div>

                    <SideMenu navItems={navItems} />
                </ContainerMain>
            </ContainerWrapper>
        </>
    );
};

export default Experience;

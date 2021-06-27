import React from 'react';
import Head from 'next/head';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaReact } from 'react-icons/fa';
import PresentationCard from '../components/PresentationCard';
import { ContainerWrapper } from '../styles/components/ContainerWrapper';
import { ContainerMain } from '../styles/components/ContainerMain';
import { ContainerSection } from '../styles/components/ContainerSection';
import { PageExperience } from '../styles/pages/Experience';
import PagesMenu from '../components/PagesMenu';
import theme from '../styles/theme';

const Home: React.FC = () => {
    return (
        <>
            <Head>
                <title>Experiência - João Marcos</title>
            </Head>
            <ContainerWrapper>
                <ContainerMain>
                    <PresentationCard />

                    <ContainerSection>
                        <div className="sectionHead">
                            <h1 className="sectionTitle">
                                Experiência Profissional
                            </h1>
                            <nav>
                                <ul className="sectionNav">
                                    {/* Passar qual tab está ativa no momento */}
                                    <PagesMenu />
                                </ul>
                            </nav>
                        </div>

                        <PageExperience>
                            <h2>Experiência</h2>

                            <VerticalTimeline
                                layout="1-column-left"
                                className="containerTimeline"
                            >
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    contentStyle={{
                                        background: theme.dark.jobActiveBalloon,
                                        color: theme.dark.text,
                                    }}
                                    contentArrowStyle={{
                                        borderRight: `7px solid ${theme.dark.jobActiveBalloon} `,
                                    }}
                                    date="2020 - present"
                                    dateClassName="containerTimelineDate"
                                    iconStyle={{
                                        background: theme.dark.jobActiveBalloon,
                                        color: theme.dark.text,
                                    }}
                                    icon={<FaReact />}
                                >
                                    <h3 className="timelineTitle">
                                        Desenvolvedor Web e Mobile
                                    </h3>
                                    <h4 className="timelineSubtitle">
                                        SMN Tecnologia da Informação
                                    </h4>
                                    <p className="timelineDescription">
                                        Creative Direction, User Experience,
                                        Visual Design, Project Management, Team
                                        Leading
                                    </p>
                                </VerticalTimelineElement>

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
                </ContainerMain>
            </ContainerWrapper>
        </>
    );
};

export default Home;

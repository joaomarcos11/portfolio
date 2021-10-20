import React from 'react';
import Head from 'next/head';

import PresentationCard from '../components/PresentationCard';

import { ContainerWrapper, ContainerMain, ContainerSection } from '../styles/components/Container';
import { PageAcademic } from '../styles/pages/Academic';
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

const Academic = () => {
    const { academicExp } = data;

    const { navItems } = useDataContext();

    return (
        <>
            <Head>
                <title>Formação - João Marcos</title>
            </Head>
            <ContainerWrapper>
                <ContainerMain>
                    <PresentationCard />

                    <div className="sectionPage">
                        <header className="sectionHeader">
                            <NavHeader />
                            <h1 className="sectionTitle">
                                Formação Acadêmcia
                            </h1>
                        </header>

                        <ContainerSection>
                            <PageAcademic>
                                <h2>Formação Acadêmica</h2>

                                <VerticalTimeline
                                    layout="1-column-left"
                                    className="containerTimeline"
                                >
                                    {academicExp.map(exp => (
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
                                                {exp.course}
                                            </h3>
                                            <h4 className="timelineSubtitle">
                                                {exp.college}
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
                            </PageAcademic>
                        </ContainerSection>
                    </div>

                    <SideMenu navItems={navItems} />
                </ContainerMain>
            </ContainerWrapper>
        </>
    );
};

export default Academic;

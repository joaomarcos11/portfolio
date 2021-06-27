import styled from 'styled-components';

export const ContainerSection = styled.section`
    height: 80vh;
    width: 50%;
    overflow-y: scroll;
    background-color: ${props => props.theme.dark.secondary};
    padding: 10px 30px;
    border: 1px solid white;

    .sectionHead {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        .sectionTitle {
            display: none;
        }
    }

    .sectionNav {
        list-style: none;
        display: flex;
        justify-content: space-evenly;

        position: relative;
        top: -4rem;

        li {
            a {
                padding: 10px 15px;
                color: ${props => props.theme.dark.text};
                text-decoration: none;
                text-transform: uppercase;
                font-size: 1.4rem;
                letter-spacing: 0.6px;
                transition: 0.3s all;

                &:hover {
                    color: ${props => props.theme.dark.primary};
                }
            }
        }
    }

    // Classes extras no Timeline
    .containerTimeline {
        margin-top: 4rem;
        /* width: 80%; */
    }
    .containerElementTimeline {
        color: ${props => props.theme.dark.text};
    }

    .timelineTitle,
    .timelineSubtitle,
    .timelineDescription,
    .containerTimelineDate {
        color: ${props => props.theme.dark.text};
    }

    .timelineTitle {
        font-size: 2.4rem;
    }

    .timelineSubtitle {
        margin-top: 1rem;
        font-size: 2rem;
    }

    .timelineDescription {
        font-size: 1.6rem;
    }

    .containerTimelineDate {
        margin: 0 2rem;
        font-size: 1.6rem !important;
        opacity: 0.9;
    }
`;

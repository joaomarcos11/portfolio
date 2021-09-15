import styled from 'styled-components';

// Características em comum de todos os Containers
// Cada componente dentro dele terá suas características em particular

export const ContainerSection = styled.section`
    height: 80vh;
    width: 100%;
    overflow-y: scroll;
    background-color: ${props => props.theme.dark.secondary};
    padding: 10px 30px;
    border: 1px solid white;

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

    ul {
        list-style: none;
    }
`;

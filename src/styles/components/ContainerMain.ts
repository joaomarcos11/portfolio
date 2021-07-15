import styled from 'styled-components';

export const ContainerMain = styled.main`
    width: 100%;

    display: flex;
    align-items: flex-start;
    justify-content: center;

    .sectionPage {
        width: 50%;
        min-width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;

        position: relative;
        top: -4rem;

        .sectionHead {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            margin-left: auto;

            .sectionTitle {
                display: none;
            }

            .sectionNav {
                list-style: none;
                display: flex;
                justify-content: space-evenly;
                align-items: center;

                /* border: 1px solid white; */
                height: 4rem;

                li {
                    a {
                        padding: 1rem 1.5rem;
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
        }
    }
`;

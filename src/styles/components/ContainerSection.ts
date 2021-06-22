import styled from 'styled-components';

export const ContainerSection = styled.section`
    height: 80vh;
    width: 40%;
    background-color: ${props => props.theme.dark.secondary};

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
`;

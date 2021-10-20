import styled from 'styled-components';

export const CardContainer = styled.section`
    height: 60vh;
    width: 20vw;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    background-color: ${props => props.theme.dark.secondary};

    .card-main {
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
            border-radius: 50%;
            width: 40%;
            height: auto;
        }

        h1,
        h2 {
            text-align: center;
            letter-spacing: 0.5px;
        }

        h1 {
            font-size: 3.2rem;
            margin-top: 2rem;
            padding: 0 1rem;
        }

        h2 {
            font-size: 2.6rem;
            margin-top: 1.2rem;
            padding: 0 2rem;
        }
    }

    .card-social {
        ul {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            list-style: none;

            li {
                a {
                    padding: 0 1rem;
                    text-decoration: none;
                    color: ${props => props.theme.dark.text};
                    font-size: 4rem;

                    &:hover {
                        font-size: 4.2rem;
                    }
                }
            }
        }
    }
`;

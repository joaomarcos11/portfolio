import styled from 'styled-components';

export const NavContainer = styled.nav`
    height: 4rem;
    border: 1px red solid;
    display: flex;

    ul {
        list-style: none;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

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
`

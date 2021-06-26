import styled from 'styled-components';

export const PageHome = styled.div`
    h2 {
        padding-bottom: 1rem;
        /* padding-left: 1.5rem; */
    }
    .sectionFlex {
        width: 100%;
        display: flex;

        .firstSection {
            margin-right: 0.5rem;
        }

        .secondSection {
            margin-left: 0.5rem;
        }

        section {
            width: 50%;
            border: 1px solid white;

            ul {
                list-style: none;

                &.listCharacteristics {
                    list-style: circle;

                    li {
                        margin-left: 2.4rem;
                    }
                }

                li {
                    width: 100%;

                    & + li {
                        margin-top: 1rem;
                    }

                    .listTitle {
                        display: inline-block;
                        text-transform: uppercase;
                        font-weight: 500;
                        width: 35%;
                    }
                    .listTitle2 {
                        display: block;
                        margin-bottom: 0.5rem;
                        text-transform: uppercase;
                        font-weight: 500;
                        width: 40%;
                    }
                }
            }
        }
    }
`;

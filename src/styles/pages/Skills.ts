import styled from 'styled-components';

export const PageSkills = styled.div`
    .hardskills-list {
        display: flex;
        flex: 0 0 20rem;
        flex-wrap: wrap;
        /* justify-content: center; */
    }

    .softskills-list {
        display: grid;

        list-style: circle;

        li {
            margin-left: 2.4rem;
        }
    }
`;

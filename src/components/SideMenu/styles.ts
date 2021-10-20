import styled from 'styled-components';

import theme from '../../styles/theme';

export const LinkItem = styled.li`
    list-style: none;
    border: 1px solid red;
    padding: 10px;
    font-size: 30px;
    cursor: pointer;
    transition: 0.3s ease;
`;

export const LinkIcon = styled.a`
    color: ${props => ((props.page === "" || props.name) ? theme.dark.linkHover : theme.dark.text )};

    &:visited {
        color: ${theme.dark.text};
    }

    &:hover {
        color: ${theme.dark.linkHover};
    }
`;

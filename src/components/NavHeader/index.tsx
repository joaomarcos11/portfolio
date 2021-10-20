import React from 'react';
import { NavContainer } from './styles';

const NavHeader = () => {
    return (
        <NavContainer>
            <ul>
                <li>
                    Contato
                    {/* { isLanguagePt ? 'Contato' : 'Contact' } */}
                </li>
                <li>
                    Currículo
                    {/* { isLanguagePt ? 'Currículo' : 'Curriculum' } */}
                </li>
                <li>
                    English
                    {/* { isLanguagePt ? 'English' : 'Português' } */}
                </li>
            </ul>
        </NavContainer>
    )
}

export default NavHeader;

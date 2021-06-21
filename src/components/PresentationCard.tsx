import React from 'react';
import { CardContainer } from '../styles/components/PresentationCard';
import {
    AiOutlineMail,
    AiOutlineGithub,
    AiOutlineLinkedin,
    AiOutlineWhatsApp,
} from 'react-icons/ai';

import data from '../../data.json';
import { title } from 'process';

const PresentationCard: React.FC = () => {
    const { personInfo, socialLinks, contact } = data;

    const { name, role } = personInfo;
    const { github, linkedin } = socialLinks;
    const { email, whatsapp } = contact;

    return (
        <CardContainer>
            <div className="card-main">
                <img src="./foto.jfif" alt={`Foto de ${name}`} />
                <h1>{name}</h1>
                <h2>{role}</h2>
            </div>
            {/* Talvez o titles devam ser nomes de Icones
            Em contato seja redirecionamento de page, muda no JSON */}
            <div className="card-social">
                <ul>
                    <li>
                        <a href={email} target="_blank">
                            <AiOutlineMail />
                        </a>
                    </li>
                    <li>
                        <a href={linkedin} target="_blank">
                            <AiOutlineLinkedin />
                        </a>
                    </li>
                    <li>
                        <a href={github} target="_blank">
                            <AiOutlineGithub />
                        </a>
                    </li>
                    <li>
                        <a href={whatsapp} target="_blank">
                            <AiOutlineWhatsApp />
                        </a>
                    </li>
                </ul>
            </div>
        </CardContainer>
    );
};

export default PresentationCard;

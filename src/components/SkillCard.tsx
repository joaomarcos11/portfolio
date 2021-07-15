import React from 'react';
import { IconType } from 'react-icons';
import { AiOutlineMail } from 'react-icons/ai';

interface SkillCardProps {
    hardskill: string[];
    iconName: IconType;
}

enum iconNames {
    AiOutlineMail,
    AiOutlineGithub,
    AiOutlineLinkedin,
    AiOutlineWhatsApp,
}

const SkillCard = ({ hardskill, iconName }: SkillCardProps) => {
    const Icon = iconName;
    return (
        <li>
            <div>{<Icon />}</div>
            <div>{hardskill.map(item => `${item}; `)}</div>
        </li>
    );
};

export default SkillCard;

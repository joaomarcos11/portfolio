import React from 'react';
import { IconType } from 'react-icons';
import { AiOutlineMail } from 'react-icons/ai';
import { SkillLi } from '../styles/components/SkillLi';

interface SkillCardProps {
    hardskill: string[];
    iconName: IconType;
    title: string;
}

const SkillCard = ({ hardskill, iconName, title }: SkillCardProps) => {
    const Icon = iconName;
    return (
        <SkillLi>
            <div className="header">
                <div className="icon">{<Icon />}</div>
                <div className="title">{title}</div>
            </div>
            <div>{hardskill.map(item => `${item}; `)}</div>
        </SkillLi>
    );
};

export default SkillCard;

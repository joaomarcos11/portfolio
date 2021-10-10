import React from 'react';
import Link from 'next/link';
import { NavIcon } from '../types';
import { LinkItem, LinkIcon } from '../styles/components/LinkIcon';
import { AiFillBulb, AiOutlineBulb } from 'react-icons/ai';

const SideMenu = ({ navItems }: NavIcon[]) => {
    return (
        <section>
            <nav>
                <ul style={{ height: '100%', display: 'flex', flexDirection:'column', justifyContent: 'space-between' }}>
                    <div>
                        {navItems.map(({ id, name, namePt, page, IconName }) => (
                            <LinkItem key={id}>
                                <Link href={`/${page}`}>
                                    <LinkIcon active={name} page={page}>{ <IconName /> }</LinkIcon>
                                </Link>
                                {/* <span>{ isLanguagePt ? namePt : name }</span> */}
                            </LinkItem>
                        ))}
                    </div>
                    <div>
                        <LinkItem>
                            <AiOutlineBulb  />
                        </LinkItem>
                    </div>
                </ul>
            </nav>
        </section>
    );
}

export default SideMenu;

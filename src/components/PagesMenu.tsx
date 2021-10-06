import React from 'react';
import Link from 'next/link';
import { NavIcon } from '../types';

// Deixar aqui, ou mover dados pra index

// import data from '../service/data.json';

const PagesMenu = ({ navItem }: NavIcon ) => {
    const { pagesMenuNav } = data;

    return (
        <>
            {pagesMenuNav.map(({ id, name, page }) => (
                <li key={id}>
                    <Link href={`/${page}`}>
                        <a>{name}</a>
                    </Link>
                </li>
            ))}
        </>
    );
};

export default PagesMenu;

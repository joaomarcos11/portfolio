import React, { createContext, useContext, useEffect, useState  } from 'react';
import { NavIcon } from '../types';
import { AiOutlineHome, AiOutlineProject, AiOutlineRead, AiOutlineRocket, AiOutlineTool } from 'react-icons/ai';

import data from '../service/data.json';

const darkNavIcons = {
    home: AiOutlineHome,
    projects: AiOutlineProject,
    experience: AiOutlineRocket,
    skills: AiOutlineTool,
    graduation: AiOutlineRead
};

const lightNavIcons = {
    home: AiOutlineHome,
    projects: AiOutlineProject,
    experience: AiOutlineRocket,
    skills: AiOutlineTool,
    graduation: AiOutlineRead
};

interface DataContextProps {
    navItems: NavIcon[];
    isDarkTheme: boolean;
    isLanguagePt: boolean;
    changeTheme(): void;
    changeLanguage(): void;
}

const DataContext = createContext<DataContextProps>({} as DataContextProps);

const DataProvider = ({ children }: { children: React.ReactNode }) => {
    const [navItems, setNavItems] = useState<NavIcon[]>([]);
    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const [isLanguagePt, setIsLanguagePt] = useState(true);

    useEffect(() => {
        if (isDarkTheme) {
            let darkNavItems = data.pagesMenuNav.map(navItem => {
                return {
                    ...navItem,
                    IconName: darkNavIcons[navItem.name]
                }
            });
            setNavItems(darkNavItems);
        }
        else {
            let lightNavItems = data.pagesMenuNav.map(navItem => {
                return {
                    ...navItem,
                    IconName: lightNavIcons[navItem.name]
                }
            });
            setNavItems(lightNavItems);
        }

    }, [isDarkTheme]);

    const changeTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }

    const changeLanguage = () => {
        setIsLanguagePt(!isLanguagePt);
    }

    return (
        <DataContext.Provider value={{ navItems, isDarkTheme, isLanguagePt, changeTheme, changeLanguage }}>
            {children}
        </DataContext.Provider>
    );
}

function useDataContext() {
    const context = useContext(DataContext);
    if (!context)
        throw new Error('useDataContext precisa ser usado dentro de DataProvider');

    return context;
}

export { DataProvider, useDataContext }

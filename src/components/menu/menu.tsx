import { ReactElement, useState } from 'react';
import styles from './menu.module.css';
import { Link } from 'react-router-dom';

interface MenuProps {
    routes: NavRoute[],
    children?: ReactElement[]

}

interface NavRoute {
    path: string,
    displayName: string
}

export function Menu({ routes, children }: MenuProps) {

    const [state, updateState] = useState({ sideMenuOpened: false })

    const toggleSideMenu = () => {
        updateState({ ...state, sideMenuOpened: !state.sideMenuOpened });
    }

    const htmlLinks = routes.map(route => {
        return (<Link to={route.path} key={route.path}>{route.displayName}</Link>);
      })

    const overlayClassNames = `${styles["overlay"]} ${styles[`overlay--${(state.sideMenuOpened ? "open" : "close")}`]}`;

    const flyoutClassNames = `${styles["flyout-menu"]} ${styles[`flyout-menu--${(state.sideMenuOpened ? "open" : "close")}`]}`;

    const pageContainerClassNames = `${styles["page-container"]}${state.sideMenuOpened ? ` ${styles["page-container--overlayed"]}` : ""}`;

    return (
        <>
            <div className={overlayClassNames} onClick={toggleSideMenu}>
            </div>
            <div className={flyoutClassNames}>{htmlLinks}</div>
            <div className={pageContainerClassNames}>
                <nav className={styles['nav']}>
                    {htmlLinks}

                        <svg onClick={toggleSideMenu} className={styles['nav-toggle-button']} width="35" height="35" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                </nav>
                    {children}
            </div>


        </>
    );
}
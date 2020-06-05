import React, { Fragment, useEffect, useRef, useState } from 'react';
import { FixedMenu, StartingMenu, MenuItemSection, MenuTitleStarting, MenuTitle, MenuItemStarting, MenuItem, Small, Medium, Large } from "../styledComponents";
import { BrowserRouter, withRouter } from "react-router-dom";

const StickyHeader = () => {
    const [isSticky, setSticky] = useState(false);
    const ref = useRef(null);
    const handleScroll = () => {
        if (ref.current) {
            setSticky(ref.current.getBoundingClientRect().top <= 0);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', () => handleScroll);
        };
    }, []);

    const createFixedMenu = () => {
        return (
            <FixedMenu>
                <MenuTitle>BLM</MenuTitle>
                <MenuItemSection>
                    <MenuItem href="/donate">Donate</MenuItem>
                    <MenuItem>Contact</MenuItem>
                    <MenuItem>Vote</MenuItem>
                    <MenuItem>Remember</MenuItem>
                </MenuItemSection>
            </FixedMenu>
        )
    }

    const startingMenu = () => {
        return (
            <StartingMenu>
                <MenuTitleStarting><b><a href="/home">BLM</a></b></MenuTitleStarting>
                <MenuItemSection>
                    <MenuItemStarting href="/donate">Donate</MenuItemStarting>
                    <MenuItemStarting>Contact</MenuItemStarting>
                    <MenuItemStarting>Vote</MenuItemStarting>
                    <MenuItemStarting>Remember</MenuItemStarting>
                </MenuItemSection>
            </StartingMenu>
        )
    }

    return (
        <div ref={ref}>
            <Small>
                {isSticky ? createFixedMenu() : startingMenu()}
            </Small>
            <Medium>
                {isSticky ? createFixedMenu() : startingMenu()}
            </Medium>
            <Large>
                {isSticky ? createFixedMenu() : startingMenu()}
            </Large>
        </div>
    )
};

export default withRouter(StickyHeader);
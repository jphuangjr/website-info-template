import styled, { css, keyframes } from "styled-components";
import icon from "../assets/blm-icon.png";

export const Row = styled.div`
    background: red;
    width: 100%;
`

export const Hero = styled.div`
    background: black;
    width: 100%;
    height: 500px;
`
export const Hero2 = styled.div`
    background: white;
    width: 100%;
    height: 5000px;
`

/** MENU STUFF */

export const FixedMenu = styled.div`
    overflow: hidden;
    position: fixed;
    top: 0;
    background-color: none;
    color: black;
    padding: 10px;
    width: 100%;
    box-shadow: 0 4px 6px -6px #222;
`

export const StartingMenu = styled.div`
    overflow: hidden;
    position: fixed;
    top: 0;
    background-color: none;
    color: white;
    padding: 10px;
    width: 100%;
`

export const MenuTitleStarting = styled.div`
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
`

export const MenuTitle = styled.div`
    float: left;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
`

export const MenuItemStarting = styled.a`
    color: white;
    text-align: center;
    padding: 5px;
    text-decoration: none;
    font-size: 14px 5px;
    visibility: hidden;
    &:hover {
        text-decoration: underline;
    }
`

export const MenuItem = styled(MenuItemStarting)`
    color: black;
`

export const MenuItemSection = styled.div`
    background-image: url(${icon});
    color: black;
    float: right;
    text-align: center;
    padding: 14px;
    border: 1px solid white;
    border-radius: 50px;
    box-shadow: 1px -1px 5px 4px rgba(0,0,0,0.21);
    margin-right: 20px;
    transition: width 1s ease-in-out;
    width: 20px;
    height: 20px;

    &:active,
    &:hover {
        width: 250px;
        background-image: none;
        padding: 14px 14px;
        border-radius: 15px;
    }

    &:active,
    &:hover ${MenuItem} {
        visibility: visible;
        padding: 14px 5px;
        color: black;
    }

    &:active,
    &:hover ${MenuItemStarting} {
        visibility: visible;
    }
`

export const MenuItemSectionStarting = styled(MenuItemSection)`
    box-shadow: 0px 0px 5px #fff
    border: none;

    &:active,
    &:hover {
        color: white;
        width: 200px;
        border-radius: 15px;
    }
`

//** Mobile Responsive Stuff */

export const Small = styled.div`
    background: blue;
    display: none;
    @media only screen and (max-width: 479px) {
        display: block;
    }
`


export const Medium = styled.div`
    background: yellow;
    display: none;
    @media only screen and (min-width: 480px) and (max-width: 767px) {
        display: block;
    }
`

export const Large = styled.div`
    background: green;
    display: none;
    @media only screen and (min-width: 768px) {
        display: block;

    }
`

import styled from "styled-components";
 

export const Box = styled.div`
    font-family: 'apple-system, BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    padding: 5% 2.5%;
    background: black;
    bottom: 0;
    width: 95%;
`;
 
export const FooterContainer = styled.div`
    font-family: 'apple-system, BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`;
 
export const Column = styled.div`
    font-family: 'apple-system, BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 60px;
`;
 
export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(
        auto-fill,
        minmax(185px, 1fr)
    );
    grid-gap: 20px;
 
    @media (max-width: 1000px) {
        grid-template-columns: repeat(
            auto-fill,
            minmax(200px, 1fr)
            font-family: 'apple-system, BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        );
    }
`;
 
export const FooterLink = styled.a`
    color: #fff;
    font-family: 'apple-system, BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    margin-bottom: 20px;
    font-size: 12px;
    text-decoration: none;
 
    &:hover {
        color: green;
        transition: 200ms ease-in;
    }
`;
 
export const Heading = styled.p`
    font-family: 'apple-system, BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-size: 18px;
    color: #fff;
    margin-bottom: 40px;
    font-weight: bold;
`;

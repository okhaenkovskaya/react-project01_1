import React from "react";
import styled from "styled-components";

const ContainerWithBGStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px;
    position: relative;

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const ContainerWithBG = ({ children, imgSrc, imgAlt }) => {
    return (
        <ContainerWithBGStyle>
            <img src={imgSrc} alt={imgAlt} />
            {children}
        </ContainerWithBGStyle>
    );
};

export default ContainerWithBG;

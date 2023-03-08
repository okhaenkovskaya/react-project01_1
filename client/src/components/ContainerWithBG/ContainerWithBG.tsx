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

type Props = {
    children: React.ReactNode | string;
    imgSrc: string;
    imgAlt: string;
};

const ContainerWithBG = ({ children, imgSrc, imgAlt }: Props) => (
    <ContainerWithBGStyle>
        <img src={imgSrc} alt={imgAlt} />
        {children}
    </ContainerWithBGStyle>
);

export default ContainerWithBG;

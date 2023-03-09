import styled from "styled-components";

const Image = styled.img`
    display: block;
    width: 100%;
    max-width: 100%;
    height: auto;
    margin: 0 0 30px;
`;


type Props = {
    fullImageData: PropsImage;
};

type PropsImage = {
    alt: string;
    src: string;
};

const FullWidthImage = ({ fullImageData: { alt, src } }: Props) => <Image src={src} alt={alt} />;

export default FullWidthImage;

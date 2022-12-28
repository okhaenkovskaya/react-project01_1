import { ReactComponent as IconTwitter } from '../assets/icons/fa-twitter.svg';
import { ReactComponent as IconFacebook } from '../assets/icons/fa-facebook.svg';
import { ReactComponent as IconGoogle } from '../assets/icons/fa-google.svg';
import { ReactComponent as IconGit } from '../assets/icons/fa-git.svg';
import fullImage from "../assets/images/image06.png";

export const fullImageData = {
    src: fullImage,
    alt: 'Lorem ipsum dolor sit amet, consectetur'
}

export const pageData = {
    title: "Contact"
}

export const socialNetworkData = {
    title: 'follow me',
    items: [
        {
            svg: <IconTwitter/>,
            link: '#'
        },
        {
            svg: <IconFacebook/>,
            link: '#'
        },
        {
            svg: <IconGoogle/>,
            link: '#'
        },
        {
            svg: <IconGit/>,
            link: '#'
        }
    ]
}
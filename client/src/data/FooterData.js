import LogoImg from "../assets/images/logo.svg";

export const footerData = {
    logoUrl: LogoImg,
    infoTExt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    copyright: "©My-app 2022. All rights reserved",
    footerNavFirst: {
        heading: "Top Hops",
        items: [
            {
                id: 0,
                name: "Fuggles",
                link: "/Archive/hops/fuggles",
            },
            {
                id: 1,
                name: "Nelson Sauvin",
                link: "Archive/hops/nelson-sauvin",
            },
            {
                id: 2,
                name: "Dana",
                link: "Archive/hops/dana",
            },
        ],
    },
    footerNavSecond: {
        heading: "Top Yeast",
        items: [
            {
                id: 0,
                name: "Belgian Ardennes",
                link: "Archive/yeast/belgian-ardennes",
            },
            {
                id: 1,
                name: "Bohemian Lager",
                link: "Archive/yeast/bohemian-lager",
            },
            {
                id: 2,
                name: "French Saison",
                link: "Archive/yeast/french-saison",
            },
        ],
    },
    footerNavThird: {
        heading: "Menu",
        items: [
            {
                id: 0,
                name: "Home",
                link: "/",
            },
            {
                id: 1,
                name: "Contact",
                link: "/Contact",
            },
            {
                id: 2,
                name: "Dashboard",
                link: "/Dashboard",
            },
            {
                id: 3,
                name: "Item34",
                link: "/figma",
            },
        ],
    },
};

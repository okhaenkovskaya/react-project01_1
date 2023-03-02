import React, { Suspense } from "react";
import styled from "styled-components";

import {
    fullImageData,
    pageData,
    socialNetworkData,
} from "../../data/ContactData";

import Loader from "../../components/Loader/Loader";

const FullWidthImageWithTitle = React.lazy(() =>
    import("../../components/FullWidthImageWithTitle")
);
const ContactForm = React.lazy(() => import("../../components/ContactForm"));
const SocialNetwork = React.lazy(() =>
    import("../../components/SocialNetwork")
);

const Container = styled.div`
    max-width: 1168px;
    margin: 0 auto;
    padding: 0 30px;
`;


const Contact = () => (
        <Suspense fallback={<Loader />}>
            <FullWidthImageWithTitle
                fullImageData={fullImageData}
                title={pageData.title}
            />

            <Container>
                <ContactForm />
                <SocialNetwork socialNetworkData={socialNetworkData} />
            </Container>
        </Suspense>
    );

export default Contact;


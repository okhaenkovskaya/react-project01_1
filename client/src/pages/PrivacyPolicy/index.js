import React, { useContext } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import { AuthContext } from "../../context/auth";
import { fullImageData, pageData } from "../../data/PolicyData";
import FullWidthImageWithTitle from "../../components/FullWidthImageWithTitle";

const Title = styled.div`
    margin: 0 0 30px;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    letter-spacing: -0.02em;
    color: #c1c6db;
`;

const Container = styled.div`
    margin: 0 auto;
    max-width: 1250px;
    padding: ${(props) => (props.user ? "0" : "30px")};
`;

const PrivacyPolicy = () => {
    const { user } = useContext(AuthContext);
    return (
        <>
            <Helmet>
                <title>PrivacyPolicy Page</title>
            </Helmet>
            {!user ? (
                <FullWidthImageWithTitle
                    fullImageData={fullImageData}
                    title={pageData.title}
                />
            ) : (
                <Title>{pageData.title}</Title>
            )}

            <Container user={user}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Commodi debitis doloribus ea error eveniet expedita nihil
                    nisi nulla quae suscipit! Aperiam aspernatur distinctio
                    earum eos impedit iure nihil nisi vel.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Commodi debitis doloribus ea error eveniet expedita nihil
                    nisi nulla quae suscipit! Aperiam aspernatur distinctio
                    earum eos impedit iure nihil nisi vel.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Commodi debitis doloribus ea error eveniet expedita nihil
                    nisi nulla quae suscipit! Aperiam aspernatur distinctio
                    earum eos impedit iure nihil nisi vel.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Commodi debitis doloribus ea error eveniet expedita nihil
                    nisi nulla quae suscipit! Aperiam aspernatur distinctio
                    earum eos impedit iure nihil nisi vel. Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit. Commodi debitis
                    doloribus ea error eveniet expedita nihil nisi nulla quae
                    suscipit! Aperiam aspernatur distinctio earum eos impedit
                    iure nihil nisi vel.Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Commodi debitis doloribus ea error eveniet
                    expedita nihil nisi nulla quae suscipit! Aperiam aspernatur
                    distinctio earum eos impedit iure nihil nisi vel.
                </p>
            </Container>
        </>
    );
};

export default PrivacyPolicy;

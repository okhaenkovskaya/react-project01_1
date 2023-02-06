import React, { useContext } from "react";

import { AuthContext } from "../../context/auth";
import { fullImageData, pageData } from "../../data/PolicyData";
import FullWidthImageWithTitle from "../../components/FullWidthImageWithTitle";
import PageTitle from "../../components/PageTitle";
import Container from "../../components/Container";

const PrivacyPolicy = () => {
    const { user } = useContext(AuthContext);
    return (
        <>
            {!user ? (
                <FullWidthImageWithTitle
                    fullImageData={fullImageData}
                    title={pageData.title}
                />
            ) : (
                <PageTitle>{pageData.title}</PageTitle>
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

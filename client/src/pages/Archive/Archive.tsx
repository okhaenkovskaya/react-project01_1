import React, { useEffect, useState, Suspense } from "react";
import axios from "axios";

import { BASE_URL_POST } from "../../data/Constans";
import Loader from "../../components/Loader/Loader";
import PageTitle from "../../components/PageTitle";
import Container from "../../components/Container";

const PostsList = React.lazy(() => import("../../components/PostsList/PostsList"));

const ArchivePage = () => {
    const [posts, setPosts] = useState<object[]>([]);

    const onLoadPage = () => {
        axios
            .get(BASE_URL_POST)
            .then((res) => setPosts([...res.data.data]))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        onLoadPage();
    }, []);

    return (
        <Suspense fallback={<Loader />}>
            <Container>
                <PageTitle>All Posts</PageTitle>
                {posts.length > 0 && <PostsList posts={posts} />}
            </Container>
        </Suspense>
    );
};

export default ArchivePage;

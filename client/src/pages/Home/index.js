import React, { useState, useEffect, Suspense } from "react";
import axios from "axios";

import { fullImageData } from "../../data/HomeData";
import Loader from "../../components/Loader";
import Container from "../../components/Container";
import { BASE_URL_POST } from "../../data/Constans";

const FullWidthImage = React.lazy(() =>
    import("../../components/FullWidthImage")
);
const NotFound = React.lazy(() => import("../../components/NotFound"));
const PostsList = React.lazy(() => import("../../components/PostsList"));
const FeaturedPost = React.lazy(() => import("../../components/FeaturedPost"));

const HomePage = () => {
    const [newPostsLoading, setNewPostsLoading] = useState(false);

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = () => {
        axios
            .get(`${BASE_URL_POST}`)
            .then((res) => {
                setPosts([...posts, ...res.data.data]);
                setNewPostsLoading(false);
            })
            .catch((error) => console.log(error));
    };

    return (
        <Suspense fallback={<Loader />}>
            <FullWidthImage fullImageData={fullImageData} />

            <Container>
                {posts.length === 0 && <NotFound />}

                {posts.length > 0 && <FeaturedPost post={posts[0]} />}

                {posts.length > 0 && (
                    <PostsList
                        posts={posts}
                        newPostsLoading={newPostsLoading}
                    />
                )}
            </Container>
        </Suspense>
    );
};

export default HomePage;

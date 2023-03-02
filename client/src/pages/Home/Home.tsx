import React, { useState, useEffect, Suspense } from "react";
import axios from "axios";

import { fullImageData } from "../../data/HomeData";
import Loader from "../../components/Loader/Loader";
import Container from "../../components/Container";
import { BASE_URL_POST } from "../../data/Constans";

const FullWidthImage = React.lazy(() =>
    import("../../components/FullWidthImage")
);
const NotFound = React.lazy(() => import("../../components/NotFound"));
const PostsList = React.lazy(() => import("../../components/PostsList/PostsList"));
const FeaturedPost = React.lazy(() => import("../../components/FeaturedPost"));

type Post = {
    _id: any;
    title: string;
    body: string;
    status: string;
    tag: [];
    categories: [];
    thumbnail: string;
    likes: number;
    views: number;
    createdAt: any;
    comments: []
};

const Home = () => {
    const [newPostsLoading, setNewPostsLoading] = useState<boolean>(false);

    const [posts, setPosts] = useState<Post[]>([]);


    const getPosts = () => {
        axios
            .get(`${BASE_URL_POST}`)
            .then((res) => {
                setPosts([...posts, ...res.data.data]);
                setNewPostsLoading(false);
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        getPosts();
    }, []);

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

export default Home;

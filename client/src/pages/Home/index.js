import React, { useState, useEffect, Suspense } from "react";
import axios from "axios";
import styled from "styled-components";

import { fullImageData } from "../../data/HomeData";
import Loader from "../../components/Loader";

const FullWidthImage = React.lazy(() =>
    import("../../components/FullWidthImage")
);
const NotFound = React.lazy(() => import("../../components/NotFound"));
const FilterBar = React.lazy(() => import("../../components/FilterBar"));
const PostsList = React.lazy(() => import("../../components/PostsList"));
const FeaturedPost = React.lazy(() => import("../../components/FeaturedPost"));

const Container = styled.div`
    margin: 0 auto;
    max-width: 1250px;
    padding: 0 30px;
`;

const HomePage = () => {
    const [page, setPage] = useState(1);
    const [isCompleted, setIsCompleted] = useState(false);
    const [newPostsLoading, setNewPostsLoading] = useState(false);

    const [posts, setPosts] = useState([]);

    /*
    const onFilter = (filterObj) => {
        axios
            .get(BASE_URL, {
                params: filterObj,
            })
            .then((res) => {
                setBeers([...res.data]);
                setNewPostsLoading(false);
                res.data.length < 6
                    ? setIsCompleted(true)
                    : setIsCompleted(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const onSearchBeer = (searchParam = "") => {
        axios
            .get(BASE_URL, {
                params: { page: 1, per_page: 6, beer_name: searchParam },
            })
            .then((res) => {
                setBeers([...res.data]);
                setNewPostsLoading(false);
                res.data.length < 6
                    ? setIsCompleted(true)
                    : setIsCompleted(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };
*/

    const getPosts = (page) => {
        axios
            .get("http://localhost:5010/posts")
            .then((res) => {
                setPosts([...posts, ...res.data.data]);
                //setPage((page) => page + 1);
                setNewPostsLoading(false);
                res.data.length < 15
                    ? setIsCompleted(true)
                    : setIsCompleted(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <Suspense fallback={<Loader />}>
                <FullWidthImage fullImageData={fullImageData} />

                <Container>
                    {/*    <FilterBar onSearchBeer={onSearchBeer} onFilter={onFilter} />*/}

                    {posts.length === 0 && <NotFound />}

                    {posts.length > 0 && <FeaturedPost post={posts[0]} />}

                    {posts.length > 0 && (
                        <PostsList
                            posts={posts}
                            page={page}
                            getPosts={getPosts}
                            isCompleted={isCompleted}
                            newPostsLoading={newPostsLoading}
                            setNewPostsLoading={setNewPostsLoading}
                        />
                    )}
                </Container>
            </Suspense>
        </>
    );
};

export default HomePage;

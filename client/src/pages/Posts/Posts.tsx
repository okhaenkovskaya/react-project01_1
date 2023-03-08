import React, { Suspense, useEffect, useState } from "react";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DataTable from "react-data-table-component";

import { BASE_URL_POST } from "../../data/Constans";
import { ReactComponent as IconNewPosts } from "../../assets/icons/new_post.svg";
import Loader from "../../components/Loader/Loader";
import DashboardPostStatus from "../../components/DashboardPosts/DashboardPostStatus/DashboardPostStatus";
import DashboardPostEditButtonsPopup from "../../components/DashboardPosts/DashboardPostEditButtonsPopup/DashboardPostEditButtonsPopup";
import PageTitle from "../../components/PageTitle";
import IconButton from "../../components/Form/IconButton";

const DashboardFormPopup = React.lazy(() =>
    import("../../components/DashboardPosts/DashboardFormPopup/DashboardFormPopup")
);
const DashboardFormEditPopup = React.lazy(() =>
    import("../../components/DashboardPosts/DashboardFormEditPopup/DashboardFormEditPopup")
);

const Head = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 20px;
`;

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

const Posts = () => {
    const [postsDB, setPostsDB] = useState<Post[]>([]);
    const [editedPostDB, setEditedPostDB] = useState<object>({});
    const [showEditPopup, setShowEditPopup] = useState<boolean>(false);
    const [showNewPopup, setShowNewPopup] = useState<boolean>(false);

    const getPosts = () => {
        fetch(`${BASE_URL_POST}`)
            .then((res) => res.json())
            .then((data) => setPostsDB(data.data));
    };

    const deletePost = (e: any, id: string) => {
        fetch(`${BASE_URL_POST}/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then(() => getPosts());
    };

    const updatePost = (e: any, post: Post) => {
        fetch(`${BASE_URL_POST}/${post._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
        })
            .then((res) => res.json())
            .then(() => getPosts());
    };

    useEffect(() => {
        getPosts();
    }, []);

    const columns = [
        {
            name: "Title",
            selector: (row: Post) => row.title,
        },
        {
            name: "Date",
            selector: (row: Post) => row.createdAt,
        },
        {
            name: "Status",
            selector: (row: Post) => <DashboardPostStatus status={row.status} />,
        },
        {
            name: "Posts",
            selector: (row: Post) => (
                <DashboardPostEditButtonsPopup
                    deletePost={deletePost}
                    setEditedPostDB={setEditedPostDB}
                    setShowEditPopup={setShowEditPopup}
                    showEditPopup={showEditPopup}
                    row={row}
                />
            ),
        },
    ];


    return (
        <Suspense fallback={<Loader />}>
            <Head>
                <PageTitle>Posts</PageTitle>

                <IconButton clickFunction={() => setShowNewPopup(true)}>
                    <IconNewPosts />
                </IconButton>
            </Head>
            <ToastContainer />
            <DataTable columns={columns} data={postsDB} />

            {showNewPopup ? (
                <DashboardFormPopup
                    setShowNewPopup={setShowNewPopup}
                    setPostsDB={setPostsDB}
                    postsDB={postsDB}
                />
            ) : null}
            {showEditPopup ? (
                <DashboardFormEditPopup
                    editedPostDB={editedPostDB}
                    updatePost={updatePost}
                    setShowEditPopup={setShowEditPopup}
                    setEditedPostDB={setEditedPostDB}
                />
            ) : null}
        </Suspense>
    );
};

export default Posts;

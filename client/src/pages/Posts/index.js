import React, { Suspense, useEffect, useState } from "react";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DataTable from "react-data-table-component";

import { BASE_URL_POST } from "../../data/Constans";
import { ReactComponent as IconNewPosts } from "../../assets/icons/new_post.svg";
import Loader from "../../components/Loader";
import DashboardPostStatus from "../../components/DashboardPosts/DashboardPostStatus";
import DashboardPostEditButtonsPopup from "../../components/DashboardPosts/DashboardPostEditButtonsPopup";
import PageTitle from "../../components/PageTitle";
import IconButton from "../../components/Form/IconButton";

const DashboardFormPopup = React.lazy(() =>
    import("../../components/DashboardPosts/DashboardFormPopup")
);
const DashboardFormEditPopup = React.lazy(() =>
    import("../../components/DashboardPosts/DashboardFormEditPopup")
);

const Head = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 20px;
`;

const Posts = () => {
    const columns = [
        {
            name: "Title",
            selector: (row) => row.title,
        },
        {
            name: "Date",
            selector: (row) => row.createdAt,
        },
        {
            name: "Status",
            selector: (row) => <DashboardPostStatus status={row.status} />,
        },
        {
            name: " ",
            selector: (row) => (
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

    const [postsDB, setPostsDB] = useState([]);
    const [editedPostDB, setEditedPostDB] = useState({});
    const [showEditPopup, setShowEditPopup] = useState(false);

    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = () => {
        fetch(`${BASE_URL_POST}`)
            .then((res) => res.json())
            .then((data) => setPostsDB(data.data));
    };

    const deletePost = (e, id) => {
        fetch(`${BASE_URL_POST}/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then(() => getPosts());
    };

    const updatePost = (e, post) => {
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

    const [showNewPopup, setShowNewPopup] = useState(false);
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

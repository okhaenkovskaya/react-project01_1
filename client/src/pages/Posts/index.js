import React, { Suspense, useEffect, useState } from "react";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DataTable from "react-data-table-component";

import { ReactComponent as IconNewPosts } from "../../assets/icons/new_post.svg";
import Loader from "../../components/Loader";
import DashboardPostStatus from "../../components/DashboardPosts/DashboardPostStatus";
import DashboardPostEditButtonsPopup from "../../components/DashboardPosts/DashboardPostEditButtonsPopup";

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

const Title = styled.h2`
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    letter-spacing: -0.02em;
    color: #c1c6db;
    margin: 0;
`;

const AddNewButton = styled.button`
    width: 48px;
    height: 48px;
    background: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    padding: 0;
    margin: 0;
    border: 0;
    position: relative;

    svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }
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
            name: "Name",
            selector: (row) => row.name,
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
        fetch("http://localhost:5010/posts")
            .then((res) => res.json())
            .then((data) => setPostsDB(data.data));
    };

    const deletePost = (e, id) => {
        fetch(`http://localhost:5010/posts/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => getPosts());
    };

    const updatePost = (e, post) => {
        fetch(`http://localhost:5010/posts/${post._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
        })
            .then((res) => res.json())
            .then((data) => getPosts());
    };

    const [showNewPopup, setShowNewPopup] = useState(false);
    return (
        <Suspense fallback={<Loader />}>
            <Head>
                <Title>Posts</Title>

                <AddNewButton
                    onClick={() => {
                        setShowNewPopup(true);
                    }}
                    type="button"
                >
                    <IconNewPosts />
                </AddNewButton>

                {/*            {checkedPosts.length > 0 && (
                    <button onClick={deletePosts} type="button">
                        Remove Items
                    </button>
                )}*/}
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

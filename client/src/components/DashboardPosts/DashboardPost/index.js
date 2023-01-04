import styled from "styled-components";
import { useState } from "react";

const Post = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    background: #ffffff;
    border: 1px solid #e6e7e9;
    border-radius: 8px;
    margin: 0 0 20px;
    padding: 5px 10px;
    position: relative;

    > div {
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 140%;
        letter-spacing: -0.3px;
        color: rgba(24, 24, 25, 0.7);
        width: 25%;
        padding: 15px 20px;
    }

    span {
        display: inline-block;
        padding: 5px 10px;
        margin: -5px -10px;
        border-radius: 100px;

        &.publish {
            background: #f2e7fc;
            color: #8c18e2;
        }

        &.future {
            background: #cbffb2;
            color: #17be1e;
        }

        &.draft {
            background: #b0ecff;
            color: #2aabbc;
        }
    }

    input {
        -moz-appearance: none;
        -webkit-appearance: none;
        -o-appearance: none;
        width: 25px;
        height: 25px;
    }

    .text-true {
        border: 2px solid red;
    }

    .text-false {
        border: 2px solid green;
    }
`;

const ButtonWrap = styled.div`
    position: absolute;
    top: 5px;
    right: 0;
`;

const ButtonOpener = styled.button`
    color: #919294;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    adding: 0;
    margin: 0;
    border: 0;
    background: none;
`;

const Popup = styled.div`
    position: absolute;
    width: 97px;
    height: 112px;
    left: -118px;
    top: 0px;
    background: #ebebeb;
    border-radius: 10px;
    padding: 15px;
    z-index: 10;
`;

const Button = styled.button`
    color: #919294;
    padding: 0;
    margin: 0 0 15px;
    border: 0;
    background: none;
    color: #000;
    font-weight: 400;
    font-size: 11px;
    line-height: 140%;
    letter-spacing: -0.3px;
    display: block;
`;

const DashboardPost = ({
    item,
    setPosts,
    posts,
    setEditPostData,
    setShowEditPopup,
    editedPost,
    checkedPosts,
    setCheckedPosts,
    isCheck,
}) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const deletePost = (id) => {
        setPosts(posts.filter((item) => item.id !== id));
        setIsPopupOpen(false);
    };

    const handleClick = (e, id) => {
        e.target.checked
            ? setCheckedPosts([...checkedPosts, id])
            : setCheckedPosts(checkedPosts.filter((item) => item !== id));
    };

    const editPost = (item) => {
        editedPost = {
            id: item.id,
            title: item.title,
            author: item.author,
            status: item.status,
            data: item.data,
            body: item.body,
        };

        setEditPostData(editedPost);
        setShowEditPopup(true);
        setIsPopupOpen(false);
    };

    return (
        <Post>
            <input
                onClick={(e) => handleClick(e, item.id)}
                defaultChecked={isCheck}
                className={`text-${isCheck}`}
                type="checkbox"
            />

            <div>{item.title}</div>
            <div>
                <span className={item.status.toLowerCase()}>{item.status}</span>
            </div>
            <div>{item.data}</div>
            <div>
                {item.author}

                <ButtonWrap>
                    <ButtonOpener onClick={() => setIsPopupOpen(!isPopupOpen)}>
                        ...
                    </ButtonOpener>

                    {isPopupOpen && (
                        <Popup>
                            <Button
                                type="button"
                                onClick={() => deletePost(item.id)}
                            >
                                Dalete
                            </Button>
                            <Button
                                type="button"
                                onClick={() => editPost(item)}
                            >
                                Edit
                            </Button>
                        </Popup>
                    )}
                </ButtonWrap>
            </div>
        </Post>
    );
};

export default DashboardPost;

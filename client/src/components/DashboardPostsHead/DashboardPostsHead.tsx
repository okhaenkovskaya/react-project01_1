import styled from "styled-components";

const Head = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    background: #ffffff;
    border: 1px solid #e6e7e9;
    border-radius: 8px;
    margin: 0 0 20px;
    padding: 5px 10px;

    strong {
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 140%;
        letter-spacing: -0.3px;
        color: rgba(24, 24, 25, 0.7);
        width: 25%;
        padding: 15px 20px;
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

type Props = {
    posts: any[];
    setCheckedPosts: ([]) => void;
    isCheckedAllPosts: boolean;
    setIsCheckedAllPosts: (param: boolean) => void;
};

const DashboardPostsHead = ({
    setCheckedPosts,
    posts,
    setIsCheckedAllPosts,
    isCheckedAllPosts,
}: Props) => {
    const selectAllPosts = () => {
        setIsCheckedAllPosts((isCheckedAllPosts) => !isCheckedAllPosts);
        const updatedCheckedPostsArray: any[] = posts.map((item, i) => posts[i].id);
        setCheckedPosts(updatedCheckedPostsArray);

        if (isCheckedAllPosts) {
            setCheckedPosts([]);
        }
    };

    return (
        <Head>
            <input
                onClick={selectAllPosts}
                className={`text-${isCheckedAllPosts}`}
                type="checkbox"
            />
            <strong>Post</strong>
            <strong>Status</strong>
            <strong>Date</strong>
            <strong>Author</strong>
        </Head>
    );
};

export default DashboardPostsHead;

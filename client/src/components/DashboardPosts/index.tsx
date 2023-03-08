import DashboardPost from "./DashboardPost/DashboardPost";

type Props = {
    posts: [];
    setPosts: () => void;
    setEditPostData: () => void;
    setShowEditPopup: () => void;
    setCheckedPosts:() => void;
    checkedPosts: [];
};


type PropsItem = {
    id: any;
    title: string;
    author: string;
    status: string;
    data: any;
    body: string;
};

const DashboardPosts = ({
    posts,
    setPosts,
    setEditPostData,
    setShowEditPopup,
    checkedPosts,
    setCheckedPosts,
}: Props) => {
    return (
        <div>
            {posts.map((item: PropsItem) => (
                <DashboardPost
                    key={item.id}
                    item={item}
                    posts={posts}
                    setCheckedPosts={setCheckedPosts}
                    checkedPosts={checkedPosts}
                    setShowEditPopup={setShowEditPopup}
                    setEditPostData={setEditPostData}
                    isCheck={checkedPosts.includes(item.id)}
                    setPosts={setPosts}
                />
            ))}
        </div>
    );
};

export default DashboardPosts;

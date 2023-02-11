import DashboardPost from "./DashboardPost";

const DashboardPosts = ({
    posts,
    setPosts,
    setEditPostData,
    setShowEditPopup,
    checkedPosts,
    setCheckedPosts,
}) => {
    return (
        <div>
            {posts.map((item) => (
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

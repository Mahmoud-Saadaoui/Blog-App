import PostItem from "./PostItem";
import "./posts.css";

const PostList = ({ posts }) => {
    if (posts?.length === 0) {
        return <div className="no-posts-found">No posts found</div>;
    }
    return (
        <div className="post-list">
            {posts?.map(item => <PostItem post={item} key={item._id} />)}
        </div>
    );
}

export default PostList;
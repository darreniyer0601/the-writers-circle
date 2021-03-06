import React, { useContext } from "react";
import { withRouter } from 'react-router-dom'; 
import PostContext from "../../context/post/PostContext";

const Post = ({ post, history }) => {
	const { _id, title, likes, displayName, comments } = post;
	const { setCurrent } = useContext(PostContext);

	const openPost = () => {
		setCurrent(_id);
		history.push(`/post/${_id}`);
	}

	return (
		<div className="card m-3" key={_id}>
			<div className="card-header">
				<p onClick={openPost} className="post-header">{title}</p>
			</div>
			<div className="card-body">
				<p className="card-text text-muted display-name">{`Posted by ${displayName}`}</p>
				<i className="fas fa-thumbs-up 2x m-2" />
				{likes}
				<i className="fas fa-comment 2x m-2" />
				{comments}
			</div>
		</div>
	);
};

export default withRouter(Post);

import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getPost } from "../../actions/post";
import PropTypes from "prop-types";

import PostItem from "../posts/PostItem";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";

const Post = ({ getPost, post: { post, loading }, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost]);

  return loading || post === null ? (
    <Fragment>
      <Spinner />
    </Fragment>
  ) : (
    <section className='container'>
      <Link to='/posts' className='btn'>
        Back To Posts
      </Link>

      <PostItem post={post} showActions={false} />

      <CommentForm postId={post._id} />

      <div className='comments'>
        {post.comments.map((comment) => (
          <CommentItem key={comment._id} comment={comment} postId={post._id} />
        ))}
      </div>
    </section>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
};

const mapStateToProp = (state) => ({
  post: state.post,
});

export default connect(mapStateToProp, { getPost })(Post);

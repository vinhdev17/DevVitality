import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";
import { addLike, removeLike, deletePost } from "../../actions/post";

const PostItem = ({
  post: { _id, text, name, avatar, user, likes, comments, date },
  auth,
  addLike,
  removeLike,
  deletePost,
  showActions,
}) => {
  const [youLiked, toggleYouLiked] = useState(false);

  useEffect(() => {
    toggleYouLiked(
      !auth.loading && likes.find((like) => like.user === auth.user._id) != null
        ? true
        : false
    );
  }, [auth.loading, !auth.loading && auth.user._id, likes]);

  const onClickLike = (e) => {
    if (!youLiked) {
      addLike(_id);
    } else removeLike(_id);
    toggleYouLiked(!youLiked);
  };

  return (
    <div className='post bg-white my-1 p-1'>
      <div>
        <Link to={`/profile/${user}`}>
          <img className='round-img' src={avatar} alt='' />
          <h4>{name}</h4>
        </Link>
      </div>

      <div>
        <p className='my-1'>{text}</p>
        <p className='post-date'>
          <Moment format='YYYY-MM-DD hh:mm A'>{date}</Moment>
        </p>

        {!auth.loading && showActions && (
          <Fragment>
            <button
              onClick={(e) => onClickLike(_id)}
              className={
                youLiked ? "btn btn-white text-primary" : "btn btn-white"
              }
            >
              <i className='fas fa-thumbs-up'></i> <span>{likes.length}</span>
            </button>

            <Link to={`/posts/${_id}`} className='btn btn-primary'>
              Discussion{" "}
              <span className='comment-count'>{comments.length}</span>
            </Link>

            {user === auth.user._id && (
              <button
                type='button'
                className='btn btn-danger'
                onClick={(e) => deletePost(_id)}
              >
                <i className='fas fa-times' />
              </button>
            )}
          </Fragment>
        )}
      </div>
    </div>
  );
};

PostItem.defaultProps = {
  showActions: true,
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);

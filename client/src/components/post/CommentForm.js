import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addComment } from "../../actions/post";
import { Link } from "react-router-dom";

const CommentForm = ({ postId, addComment, auth: { loading, user } }) => {
  const [commentText, setCommentText] = useState("");

  return (
    <div className='post-form bg-white my-1 p-1'>
      {!loading && (
        <Link to={`/profile/${user._id}`}>
          <img src={user.avatar} alt='' className='round-img' />
        </Link>
      )}

      <form
        className='form'
        onSubmit={(e) => {
          e.preventDefault();
          addComment(postId, { text: commentText });
          setCommentText("");
        }}
      >
        <textarea
          className='bg-light'
          name='text'
          cols='30'
          rows='5'
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder='Comment on this post'
          required
        ></textarea>
        <input type='submit' className='btn btn-primary mt-1' value='Comment' />
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addComment })(CommentForm);

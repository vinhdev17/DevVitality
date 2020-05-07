import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { addPost } from "../../actions/post";

const PostForm = ({ addPost, auth: { loading, user } }) => {
  const [text, setText] = useState("");

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
          addPost({ text });
          setText("");
        }}
      >
        <textarea
          className='bg-light'
          name='text'
          cols='30'
          rows='5'
          placeholder="What's on your mind, Swift?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        ></textarea>
        <input type='submit' className='btn btn-primary mt-1' value='Post' />
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addPost })(PostForm);

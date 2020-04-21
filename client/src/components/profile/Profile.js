import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import ProfileTop from "./ProfileTop";
import { getProfileById, addEducation } from "../../actions/profile";
import ProfileAbout from "./ProfileAbout";
import ProfileExperience from "./ProfileExperience";
import ProfileEducation from "./ProfileEducation";
import ProfileGithub from "./ProfileGithub";

const Profile = ({
  match,
  getProfileById,
  profile: { profile, loading },
  auth,
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  return profile === null || loading ? (
    <Spinner />
  ) : (
    <section className='container'>
      <Link to='/profiles' className='btn'>
        Back To Profiles
      </Link>

      {auth.isAuthenticated &&
        auth.loading === false &&
        auth.user._id === profile.user._id && (
          <Link to='/edit-profile' className='btn btn-dark'>
            Edit Profile
          </Link>
        )}

      <div className='profile-grid my-1'>
        <ProfileTop profile={profile} />
        <ProfileAbout profile={profile} />

        {/* <!-- Experience --> */}
        <div className='profile-exp bg-white p-2'>
          <h2 className='text-primary'>Experiences</h2>
          {profile.experience.length > 0 ? (
            <Fragment>
              {profile.experience.map((experience) => {
                return (
                  <ProfileExperience
                    key={experience._id}
                    experience={experience}
                  />
                );
              })}
            </Fragment>
          ) : (
            <h4>No experience credentials</h4>
          )}
        </div>

        <div className='profile-edu bg-white p-2'>
          <h2 className='text-primary'>Education</h2>
          {profile.education.length > 0 ? (
            <Fragment>
              {profile.education.map((education) => {
                return (
                  <ProfileEducation key={education._id} education={education} />
                );
              })}
            </Fragment>
          ) : (
            <h4>No education credentials</h4>
          )}
        </div>

        {profile.githubusername && (
          <ProfileGithub username={profile.githubusername} />
        )}
      </div>
    </section>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);

import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const ProfileExperience = ({
  experience: { company, current, from, to, title, description, loaction },
}) => {
  return (
    <div>
      <h3>{company}</h3>
      <p>
        <Moment format='MMM YYYY'>{from}</Moment> -{" "}
        {current || !to ? "Current" : <Moment format='MMM YYYY'>{to}</Moment>}
      </p>
      <p>
        <strong>Position: </strong> {title}
      </p>
      {description && (
        <div>
          <strong>Description: </strong> {description}
        </div>
      )}
    </div>
  );
};

ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired,
};

export default ProfileExperience;

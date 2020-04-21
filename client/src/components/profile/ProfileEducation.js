import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const ProfileEducation = ({
  education: { school, current, from, to, degree, description, fieldofstudy },
}) => {
  return (
    <div>
      <h3>{school}</h3>
      <p>
        <Moment format='MMM YYYY'>{from}</Moment> -{" "}
        {current || !to ? "Current" : <Moment format='MMM YYYY'>{to}</Moment>}
      </p>
      <p>
        <strong>Degree: </strong> {degree}
      </p>
      <p>
        <strong>Feild: </strong> {fieldofstudy}
      </p>

      {description && (
        <Fragment>
          <p>
            <strong>Description: </strong> {description}
          </p>
        </Fragment>
      )}
    </div>
  );
};

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired,
};

export default ProfileEducation;

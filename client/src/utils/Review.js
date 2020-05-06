import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Review = (props) => {
  const [state, setState] = useState({ contact: "" });

  useEffect(() => {
    const { steps } = props;
    const { contact } = steps;
    setState({ contact });
  }, [props]);

  const { contact } = state;

  return (
    <div style={{ width: "120%" }}>
      <h3>Summary</h3>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{props.name}</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>{contact.value}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

export default Review;

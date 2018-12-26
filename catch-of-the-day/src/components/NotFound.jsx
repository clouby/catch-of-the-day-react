import React from "react";

const NotFound = ({ location }) => (
  <div>
    <h2>
      Not Match:
      <strong> {location.pathname}</strong>
    </h2>
  </div>
);

export default NotFound;

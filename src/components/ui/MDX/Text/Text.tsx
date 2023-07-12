import React from "react";

const Text = (props: any) => (
  <div style={{ marginTop: "1rem", textIndent: "2rem" }}>
    <p {...props} />
  </div>
);

export default Text;

import React from "react";

const linkForWatchLive = "/live";

const CreateLinkRenderProp = props => {
  if (props.status === "live") {
    return (
      <a href={linkForWatchLive}>
        {props.children }
      </a>
    );
  }
  return props.children;
};

export default CreateLinkRenderProp;

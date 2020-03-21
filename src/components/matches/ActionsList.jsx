import React from "react";
import TemplateComponentAction from "../templateComponentAction/TemplateComponentAction";
import CreateLinkHOC from "../../renderProp/createLinkRenderProp";

const ActionsList = ({actions}) => {
  return (
    <>
      <ul className="actionList">
        {actions.map(e => (
          <CreateLinkHOC status={e.status} key={e._id}>
            <TemplateComponentAction {...e} />
          </CreateLinkHOC>
        ))}
      </ul>
    </>
  );
};

export default ActionsList;

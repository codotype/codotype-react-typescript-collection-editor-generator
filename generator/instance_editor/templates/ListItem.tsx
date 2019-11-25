import { <%= schema.class_name %> } from "./index";
import * as React from "react";

interface <%= schema.class_name %>ListItemProps {
  <%= schema.identifier %>: <%= schema.class_name %>;
  onEditButtonClick: (<%= schema.identifier %>ToBeEdited: <%= schema.class_name %>) => void;
  onRemoveButtonClick: (<%= schema.identifier %>ToBeRemoved: <%= schema.class_name %>) => void;
}

export function <%= schema.class_name %>ListItem(props: <%= schema.class_name %>ListItemProps) {
  return (
    <li className="list-group-item">

      <div className="row d-flex align-items-center">
        <div className="col-sm-8">
          <%_ schema.attributes.forEach((attr, index) => { _%>
          <div className="badge badge-primary mr-2">
            <%= attr.label %>: {props.<%= schema.identifier %>.<%= attr.identifier %>}
          </div>
          <%_ }) _%>
        </div>

        <div className="col-sm-4 d-flex justify-content-end">
          <button
            className="btn btn-outline-warning"
            onClick={() => {
              props.onEditButtonClick(props.<%= schema.identifier %>);
            }}
          >
            <i className="fa fa-fw fa-pencil" />
            Edit
          </button>
          <button
            className="btn btn-outline-danger ml-2"
            onClick={() => {
              props.onRemoveButtonClick(props.<%= schema.identifier %>);
            }}
          >
            <i className="fa fa-fw fa-trash" />
            Remove
          </button>
        </div>
      </div>
    </li>
  );
}

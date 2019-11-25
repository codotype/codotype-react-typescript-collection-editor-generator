import { <%= schema.class_name %> } from "./index";
import * as React from "react";
import { <%= schema.class_name %>ListItem } from "./<%= schema.class_name %>ListItem";

interface <%= schema.class_name %>ListProps {
  <%= schema.identifier_plural %>: <%= schema.class_name %>[];
  onEditButtonClick: (<%= schema.identifier %>ToBeEdited: <%= schema.class_name %>) => void;
  onRemoveButtonClick: (<%= schema.identifier %>ToBeRemoved: <%= schema.class_name %>) => void;
}

export function <%= schema.class_name %>List(props: <%= schema.class_name %>ListProps) {
  return (
    <ul className="list-group">
      {props.<%= schema.identifier_plural %>.map((attr: <%= schema.class_name %>) => {
        return (
          <<%= schema.class_name %>ListItem
            key={String(attr.id)}
            <%= schema.identifier %>={attr}
            onEditButtonClick={props.onEditButtonClick}
            onRemoveButtonClick={props.onRemoveButtonClick}
          />
        )
      })}
    </ul>
  );
}

import { <%= schema.class_name %> } from "./index";
import * as React from "react";

/**
 * <%= schema.class_name %>FormProps
 * `editorModel` - the `<%= schema.class_name %>` currently being edited
 * `supportedDatatypes` - the unique IDs of supported datatypes made available in the form
 * `onSubmit` - submits the form to either create or update a `<%= schema.class_name %>`
 * `onCancel` - closes the formw
 */
interface <%= schema.class_name %>FormProps {
  editorModel: <%= schema.class_name %>;
  onSubmit: (updated<%= schema.class_name %>: <%= schema.class_name %>) => void;
  onCancel: () => void;
}

/**
 * <%= schema.class_name %>Form
 * @param props - see `<%= schema.class_name %>FormProps`
 */
export function <%= schema.class_name %>Form(props: <%= schema.class_name %>FormProps) {
  <%_ schema.attributes.forEach((attr, index) => { _%>
  <%_ if (attr.datatype === Datatype.STRING) { _%>
  const [<%= attr.identifier %>, set_<%= attr.identifier %>] = React.useState<string>(props.editorModel.<%= attr.identifier %>);
  <%_ } else if (attr.datatype === Datatype.TEXT) { _%>
  const [<%= attr.identifier %>, set_<%= attr.identifier %>] = React.useState<string>(props.editorModel.<%= attr.identifier %>);
  <%_ } else if (attr.datatype === Datatype.INTEGER) { _%>
  const [<%= attr.identifier %>, set_<%= attr.identifier %>] = React.useState<number>(props.editorModel.<%= attr.identifier %>);
  <%_ } else if (attr.datatype === Datatype.BOOLEAN) { _%>
  const [<%= attr.identifier %>, set_<%= attr.identifier %>] = React.useState<boolean>(props.editorModel.<%= attr.identifier %>);
  <%_ } _%>
  <%_ }) _%>

  return (
    <div className="card card-body mt-4">
      <div className="row">
        <%_ schema.attributes.forEach((attr, index) => { _%>
        <div className="col-lg-12">
          <div className="form-group">
            <label><%= attr.label %></label>
          <%_ if (attr.datatype === Datatype.STRING) { _%>
            <input
              type="text"
              className="form-control"
              value={<%= attr.identifier %>}
              onChange={(e) => {
                set_<%= attr.identifier %>(e.currentTarget.value);
              }}
            />
          <%_ } else if (attr.datatype === Datatype.TEXT) { _%>
            <input
              type="text"
              className="form-control"
              value={<%= attr.identifier %>}
              onChange={(e) => {
                set_<%= attr.identifier %>(e.currentTarget.value);
              }}
            />
          <%_ } else if (attr.datatype === Datatype.INTEGER) { _%>
            <input
              type="number"
              className="form-control"
              value={<%= attr.identifier %>}
              onChange={(e) => {
                set_<%= attr.identifier %>(e.currentTarget.value);
              }}
            />
          <%_ } else if (attr.datatype === Datatype.BOOLEAN) { _%>
            <input
              type="checkbox"
              checked={<%= attr.identifier %>}
              onChange={(e) => {
                set_<%= attr.identifier %>(e.currentTarget.checked);
              }}
            />
          <%_ } _%>
          </div>
        </div>
        <%_ }) _%>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <button
            className="btn btn-success"
            onClick={() => {
              props.onSubmit({
                ...props.editorModel,
                <%_ schema.attributes.forEach((attr, index) => { _%>
                <%_ if (attr.datatype === Datatype.STRING) { _%>
                <%= attr.identifier %>,
                <%_ } else if (attr.datatype === Datatype.TEXT) { _%>
                <%= attr.identifier %>,
                <%_ } else if (attr.datatype === Datatype.INTEGER) { _%>
                <%= attr.identifier %>,
                <%_ } else if (attr.datatype === Datatype.BOOLEAN) { _%>
                <%= attr.identifier %>,
                <%_ } _%>
                <%_ }) _%>
              });
            }}
          >
            Save
          </button>

          <button className="btn btn-outline-secondary ml-2" onClick={props.onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

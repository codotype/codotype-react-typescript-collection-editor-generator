import { <%= schema.class_name %>EditorState, <%= schema.identifier %>EditorReducer, getInitialState, default<%= schema.class_name %> } from "./reducer";
import * as React from "react";
import { Dispatch } from "react";
import { <%= schema.class_name %>EditorAction, <%= schema.class_name %>EditorActionType } from "./actions";
import { <%= schema.class_name %>List } from "./<%= schema.class_name %>List";
import { <%= schema.class_name %>Form } from "./<%= schema.class_name %>Form";
import { <%= schema.class_name %> } from "./index";
import { <%= schema.class_name %>ListEmptyState } from "./<%= schema.class_name %>ListEmptyState";

interface <%= schema.class_name %>EditorProps {
  <%= schema.identifier_plural %>: <%= schema.class_name %>[];
  onChange: (updated<%= schema.class_name_plural %>: <%= schema.class_name %>[]) => void;
}

export function <%= schema.class_name %>Editor(props: <%= schema.class_name %>EditorProps) {
  const [state, dispatch]: [<%= schema.class_name %>EditorState, Dispatch<<%= schema.class_name %>EditorAction>] = React.useReducer(<%= schema.identifier %>EditorReducer, getInitialState(props.<%= schema.identifier_plural %>));

  React.useEffect(() => {
    if (state.lastUpdatedTime !== null) {
      props.onChange(state.<%= schema.identifier_plural %>)
    }
  }, [state.lastUpdatedTime]);

  return (
    <div className="row">
      <div className="col-lg-12">

        <button
          className="btn btn-primary"
          onClick={() => {
            dispatch({
              type: <%= schema.class_name %>EditorActionType.EDIT,
              <%= schema.identifier %>: default<%= schema.class_name %>
            })
          }}
        >
          New +
        </button>

        <hr />

        {state.<%= schema.identifier_plural %>.length === 0 && (
          <<%= schema.class_name %>ListEmptyState />
        )}

        { state.<%= schema.identifier_plural %>.length > 0 && (
          <<%= schema.class_name %>List
            <%= schema.identifier_plural %>={state.<%= schema.identifier_plural %>}
            onEditButtonClick={(<%= schema.identifier %>ToBeEdited: <%= schema.class_name %>) => {
              dispatch({
                type: <%= schema.class_name %>EditorActionType.EDIT,
                <%= schema.identifier %>: <%= schema.identifier %>ToBeEdited
              })
            }}
            onRemoveButtonClick={(<%= schema.identifier %>ToBeRemoved: <%= schema.class_name %>) => {
              dispatch({
                type: <%= schema.class_name %>EditorActionType.REMOVE,
                <%= schema.identifier %>: <%= schema.identifier %>ToBeRemoved
              })
            }}
          />
        )}

        {state.editorModel !== null && (
          <<%= schema.class_name %>Form
            editorModel={state.editorModel}
            onSubmit={(updated<%= schema.class_name %>: <%= schema.class_name %>) => {
              // Creates a new <%= schema.identifier %>
              if (updated<%= schema.class_name %>.id === null) {
                dispatch({
                  type: <%= schema.class_name %>EditorActionType.CREATE,
                  <%= schema.identifier %>: updated<%= schema.class_name %>
                })
                return;
              }

              // Updates an existing <%= schema.identifier %>
              dispatch({
                type: <%= schema.class_name %>EditorActionType.UPDATE,
                <%= schema.identifier %>: updated<%= schema.class_name %>
              })
            }}
            onCancel={() => {
              dispatch({
                type: <%= schema.class_name %>EditorActionType.CLEAR_EDITOR,
              })
            }}
          />
        )}
      </div>
    </div>
  );
}

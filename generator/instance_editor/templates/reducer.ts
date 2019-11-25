import { <%= schema.class_name %> } from "./index";
import {
  <%= schema.class_name %>EditorAction,
  <%= schema.class_name %>EditorActionType,
} from "./actions";

/**
 * <%= schema.class_name %>EditorState
 * TODO - annotate
 */
export interface <%= schema.class_name %>EditorState {
  <%= schema.identifier_plural %>: <%= schema.class_name %>[];
  editorModel: null | <%= schema.class_name %>;
  lastUpdatedTime: string | null;
}

/**
 * default<%= schema.class_name %>
 * TODO - annotate
 */
export const default<%= schema.class_name %>: <%= schema.class_name %> = {
  id: null,
  <%_ schema.attributes.forEach((attr, index) => { _%>
  <%_ if (attr.datatype === Datatype.STRING) { _%>
  <%= attr.identifier %>: '',
  <%_ } else if (attr.datatype === Datatype.TEXT) { _%>
  <%= attr.identifier %>: '',
  <%_ } else if (attr.datatype === Datatype.INTEGER) { _%>
  <%= attr.identifier %>: 0,
  <%_ } else if (attr.datatype === Datatype.BOOLEAN) { _%>
  <%= attr.identifier %>: false,
  <%_ } _%>
  <%_ }) _%>
};

/**
 * getUniqueId
 */
export function getUniqueId(): string {
  return Math.random().toString()
}

/**
 * getLastUpdatedTime
 */
export function getLastUpdatedTime(): string {
  return Math.round((new Date()).getTime() / 1000).toString()
}

/**
 * getInitialState
 * @param <%= schema.identifier_plural %>
 */
export function getInitialState(<%= schema.identifier_plural %>: <%= schema.class_name %>[]): <%= schema.class_name %>EditorState {
  return {
    <%= schema.identifier_plural %>: [
      ...<%= schema.identifier_plural %>
    ],
    editorModel: null,
    lastUpdatedTime: null
  };
}


/**
 * create<%= schema.class_name %>
 * Creates a new <%= schema.class_name %>
 * @param state
 * @param new<%= schema.class_name %>
 */
export function create<%= schema.class_name %>(state: <%= schema.class_name %>EditorState, new<%= schema.class_name %>: <%= schema.class_name %>): <%= schema.class_name %>EditorState {
  return {
    ...state,
    editorModel: null,
    lastUpdatedTime: getLastUpdatedTime(),
    <%= schema.identifier_plural %>: [
      ...state.<%= schema.identifier_plural %>,
      {
        ...new<%= schema.class_name %>,
        id: getUniqueId(),
      }
    ]
  }
}

/**
 * edit<%= schema.class_name %>
 * Selects an <%= schema.identifier %> for editing
 * @param state
 * @param new<%= schema.class_name %>
 */
export function edit<%= schema.class_name %>(state: <%= schema.class_name %>EditorState, edit<%= schema.class_name %>: <%= schema.class_name %>): <%= schema.class_name %>EditorState {
  return {
    ...state,
    editorModel: {
      ...edit<%= schema.class_name %>
    }
  }
}

/**
 * update<%= schema.class_name %>
 * Selects an <%= schema.identifier %> for editing
 * @param state
 * @param new<%= schema.class_name %>
 */
export function update<%= schema.class_name %>(state: <%= schema.class_name %>EditorState, updated<%= schema.class_name %>: <%= schema.class_name %>): <%= schema.class_name %>EditorState {
  return {
    ...state,
    editorModel: null,
    lastUpdatedTime: getLastUpdatedTime(),
    <%= schema.identifier_plural %>: state.<%= schema.identifier_plural %>.map((<%= schema.camel_case %>: <%= schema.class_name %>) => {
      if (<%= schema.camel_case %>.id === updated<%= schema.class_name %>.id) {
        return {
          ...updated<%= schema.class_name %>
        };
      }
      return <%= schema.camel_case %>;
    }),
  }
}

/**
 * remove<%= schema.class_name %>
 * Removes an <%= schema.class_name %>
 * @param state
 * @param new<%= schema.class_name %>
 */
export function remove<%= schema.class_name %>(state: <%= schema.class_name %>EditorState, toBeRemoved: <%= schema.class_name %>): <%= schema.class_name %>EditorState {
  return {
    ...state,
    editorModel: null,
    lastUpdatedTime: getLastUpdatedTime(),
    <%= schema.identifier_plural %>: state.<%= schema.identifier_plural %>.filter((attr: <%= schema.class_name %>) => {
      return attr.id !== toBeRemoved.id;
    })
  }
}

/**
 * clearEditor
 * Selects an <%= schema.identifier %> for editing
 * @param state
 * @param new<%= schema.class_name %>
 */
export function clearEditor(state: <%= schema.class_name %>EditorState): <%= schema.class_name %>EditorState {
  return {
    ...state,
    editorModel: null
  }
}

/**
 * <%= schema.identifier %>EditorReducer
 * @param state
 * @param action
 */
export function <%= schema.identifier %>EditorReducer(state: <%= schema.class_name %>EditorState, action: <%= schema.class_name %>EditorAction) {
  switch (action.type) {
    case <%= schema.class_name %>EditorActionType.CREATE:
      return create<%= schema.class_name %>(state, action.<%= schema.identifier %>);
    case <%= schema.class_name %>EditorActionType.EDIT:
      return edit<%= schema.class_name %>(state, action.<%= schema.identifier %>);
    case <%= schema.class_name %>EditorActionType.UPDATE:
      return update<%= schema.class_name %>(state, action.<%= schema.identifier %>);
    case <%= schema.class_name %>EditorActionType.REMOVE:
      return remove<%= schema.class_name %>(state, action.<%= schema.identifier %>);
    case <%= schema.class_name %>EditorActionType.CLEAR_EDITOR:
      return clearEditor(state);
    default:
      return state;
  }
}


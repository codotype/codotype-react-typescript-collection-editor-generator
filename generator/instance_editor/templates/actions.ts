import { <%= schema.class_name %> } from "./index";

export enum <%= schema.class_name %>EditorActionType {
  CREATE = "CREATE",
  UPDATE = "UPDATE",
  REMOVE = "REMOVE",
  EDIT = "EDIT",
  CLEAR_EDITOR = "CLEAR_EDITOR",
}

export interface <%= schema.class_name %>EditorDefaultAction {
  type: <%= schema.class_name %>EditorActionType;
  <%= schema.identifier %>: <%= schema.class_name %>;
}

export interface <%= schema.class_name %>EditorClearEditorAction {
  type: <%= schema.class_name %>EditorActionType.CLEAR_EDITOR;
}

export type <%= schema.class_name %>EditorAction = <%= schema.class_name %>EditorDefaultAction | <%= schema.class_name %>EditorClearEditorAction;

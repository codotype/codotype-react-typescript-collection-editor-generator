export { <%= schema.class_name %>Editor } from "./component";

export interface <%= schema.class_name %> {
  id: null | string;
  <%_ schema.attributes.forEach((attr, index) => { _%>
  <%_ if (attr.datatype === Datatype.STRING) { _%>
  <%= attr.identifier %>: string;
  <%_ } else if (attr.datatype === Datatype.TEXT) { _%>
  <%= attr.identifier %>: string;
  <%_ } else if (attr.datatype === Datatype.INTEGER) { _%>
  <%= attr.identifier %>: number;
  <%_ } else if (attr.datatype === Datatype.BOOLEAN) { _%>
  <%= attr.identifier %>: boolean;
  <%_ } _%>
  <%_ }) _%>
}

import { <%= schema.class_name %>Editor } from "../components/<%= schema.identifier %>_editor";

// // // //

export default () => {
  return (
    <div className="row mt-4">
      <div className="col-lg-12">

        <<%= schema.class_name %>Editor
          <%= schema.identifier_plural %>={[]}
          onChange={(updated<%= schema.class_name_plural %>: any[]) => {
            console.log(updated<%= schema.class_name_plural %>);
          }}
        />

      </div>
    </div>
  );
}
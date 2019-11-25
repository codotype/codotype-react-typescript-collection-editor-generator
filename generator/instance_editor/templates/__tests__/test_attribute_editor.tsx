import { <%= schema.class_name %>Editor } from "../index";
import TestRenderer, { ReactTestRendererJSON } from 'react-test-renderer'

// // // //

describe("SchemaForm", () => {
  test("render", () => {
    const renderedComponent: ReactTestRendererJSON | null = TestRenderer.create(
      <<%= schema.class_name %>Editor
        <%= schema.identifier_plural %>={[]}
        supportedDatatypes={[]}
        onChange={jest.fn()}
      />
    ).toJSON();
    expect(renderedComponent).toMatchSnapshot();
  })
})
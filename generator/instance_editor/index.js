
module.exports = {
  name: 'ModuleComponents',
  async forEachSchema({ blueprint, configuration, schema }) {

    // page.ts
    // actions.ts
    // Form.tsx
    // ListEmptyState.tsx
    // ListItem.tsx
    // List.tsx
    // component.tsx
    // DestroyButton.tsx
    // index.ts
    // reducer.ts

    // Destination for module / components directory
    const moduleComponentsDest = 'components/' + schema.identifier + '_editor/'

    // Ensures module components directory
    await this.ensureDir(moduleComponentsDest)

    // TODO - ensure page here
    await this.renderComponent({
      src: 'page.tsx',
      dest: `pages/${schema.identifier_plural}.tsx`,
      data: { schema }
    })

    await this.renderComponent({
      src: 'actions.ts',
      dest: moduleComponentsDest + '/actions.ts',
      data: { schema }
    })

    await this.renderComponent({
      src: 'Form.tsx',
      dest: moduleComponentsDest + schema.class_name + 'Form.tsx',
      data: { schema }
    })

    await this.renderComponent({
      src: 'ListEmptyState.tsx',
      dest: moduleComponentsDest + schema.class_name + 'ListEmptyState.tsx',
      data: { schema }
    })

    await this.renderComponent({
      src: 'ListItem.tsx',
      dest: moduleComponentsDest + schema.class_name + 'ListItem.tsx',
      data: { schema }
    })

    await this.renderComponent({
      src: 'List.tsx',
      dest: moduleComponentsDest + schema.class_name + 'List.tsx',
      data: { schema }
    })

    await this.renderComponent({
      src: 'component.tsx',
      dest: moduleComponentsDest + '/component.tsx',
      data: { schema }
    })

    await this.renderComponent({
      src: 'index.ts',
      dest: moduleComponentsDest + '/index.ts',
      data: { schema }
    })

    await this.renderComponent({
      src: 'reducer.ts',
      dest: moduleComponentsDest + '/reducer.ts',
      data: { schema }
    })

  }
};

module.exports = {
  name: 'Next.js + TypeScript + Next.js Instance Editor',
  async write () {
    await this.composeWith('./next_js_base')
    await this.composeWith('./instance_editor')
  }
}

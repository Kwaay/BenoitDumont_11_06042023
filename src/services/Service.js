export default class Service {
  static resourceUrl = '';

  static async getAll() {
    return fetch(this.resourceUrl).then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('Unable to fetch resources');
    });
  }

  static async getOne(id) {
    if (!this.findable) throw new Error("This resource isn't findable");
    const items = await this.getAll();
    const searchItem = items.find((item) => item.id === id);
    if (searchItem !== undefined) return searchItem;
    throw new Error('Unable to fetch this resource');
  }
}

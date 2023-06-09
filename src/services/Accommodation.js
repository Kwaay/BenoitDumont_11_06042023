import Service from './Service';

export default class Accommodation extends Service {
  static resourceUrl = '/logements.json';

  static findable = true;
}

import Realm from 'realm'

// Define your object model
export class Cow extends Realm.Object<Cow> {
  _id!: Realm.BSON.ObjectId
  name!: string
  code!: string
  birthdate: Date = new Date()
  origin!: string

  static schema = {
    name: 'Cow',
    properties: {
      _id: 'objectId',
      name: 'string',
      code: 'string',
      birthdate: 'date',
      origin: 'string',
    },
    primaryKey: '_id',
  }
}

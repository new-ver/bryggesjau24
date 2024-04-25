/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1ajltxwm7tmgtk4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "85gynmxg",
    "name": "comment",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1ajltxwm7tmgtk4")

  // remove
  collection.schema.removeField("85gynmxg")

  return dao.saveCollection(collection)
})

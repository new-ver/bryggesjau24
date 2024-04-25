/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "1ajltxwm7tmgtk4",
    "created": "2024-04-25 10:18:03.799Z",
    "updated": "2024-04-25 10:18:03.799Z",
    "name": "attendees",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "s87t9tr9",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "pxrlsctd",
        "name": "isAttending",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("1ajltxwm7tmgtk4");

  return dao.deleteCollection(collection);
})

const dbName = "departments";
let request = indexedDB.open(dbName, 1);
request.onupgradeneeded = function (event) {
    let db = event.target.result;
    // create store
    db.createObjectStore("developers", {
        keyPath: "id"
    });
    db.createObjectStore("designers", {
        keyPath: "id"
    });
    db.createObjectStore("sale", {
        keyPath: "id"
    });
    db.createObjectStore("support", {
        keyPath: "id"
    });
    db.createObjectStore("headhunter", {
        keyPath: "id"
    });
    db.createObjectStore("marketing", {
        keyPath: "id"
    });
    db.createObjectStore("management", {
        keyPath: "id"
    });
    db.createObjectStore("accounting", {
        keyPath: "id"
    });
}
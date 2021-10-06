const MongoClient = require("mongodb").MongoClient;
let dbUrl = "mongodb://localhost";
const callback = (err, client) => {
  if (err) throw err;

  let db = client.db("vehicle");
  //   db.collection("car").findOne({}, (findErr, result) => {
  //     if (findErr) throw findErr;
  //     console.log(result.name);
  //     // db와 연결 끊기
  //     client.close();
  //   });

  let car = db.collection("car");
  car.find().toArray((findErr, arr) => {
    if (findErr) throw findErr;
    console.log(arr);
    // db와 연결 끊기
    client.close();
  });
};

MongoClient.connect(dbUrl, { useUnifiedTopology: true }, callback);

let mongoose = require("mongoose");
let db = require("../models/post");

mongoose.connect("mongodb://localhost/music_is_for_me", {
  useNewUrlParser: true,
  useFindAndModify: false
});



let postSeed = [
    {
        name: "Garrett Reichman & The Funky Bunch",
        role: "Vocal Coach",
        video: "http://www.youtube.com/watch?v=99j0zLuNhi8",
        author_id: 69,
        email: "gsreichman@gmail.com",
        title: "Teacher",
        description: "sample description",
        phone: "867-53-09"
    },
    {
        name : "gsr",
        role : "guitar",
        video : "http://www.youtube.com/watch?v=99j0zLuNhi8",
        author_id : 1337,
        email : "gsreichman@gmail.com",
        title : "Student",
        description : "sample description",
        phone: "867-53-09"
    },
    {
        name: "rsg",
        role: "ukelele, Guitar",
        video: "http://www.youtube.com/watch?v=99j0zLuNhi8",
        author_id: 12,
        email: "gsreichman@gmail.com",
        title: "Teacher",
        description: "sample description",
        phone: "867-53-09"
    },
    {
        name: "test",
        role: " vocals",
        video: "http://www.youtube.com/watch?v=99j0zLuNhi8",
        author_id: 96,
        email: "gsreichman@gmail.com",
        title: "Student",
        description: "sample description",
        phone: "867-53-09"
    },
    {
        name: "duke nukem",
        role: "drums",
        video: "http://www.youtube.com/watch?v=99j0zLuNhi8",
        author_id: 2,
        email: "gsreichman@gmail.com",
        title: "Teacher",
        description: "sample description",
        phone: "867-53-09"
    }
];

db.deleteMany({})
    .then(() => db.collection.insertMany(postSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

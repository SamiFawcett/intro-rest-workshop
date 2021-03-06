var express = require('express');
var app = express();
var path = require('path');

MovieData = [
    {
        "name": "The Dark Knight",
        "genre": "Action",
        "rating": 8.7
    },
    {
        "name": "The Town",
        "genre": "Boston Action",
        "rating": 10
    },
    {
        "name": "Good Will Hunting",
        "genre": "Boston Education",
        "rating": 10,
    },
    {
        "name": "Taxi Driver",
        "genre": "New York Crime",
        "rating": 1.2,
    },
    {
        "name": "The Rookie",
        "genre": "Baseball",
        "rating": 10
    },
    {
        "name": "Step Brothers",
        "genre": "Comedy",
        "rating": 9.5
    },
    {
        "name": "War Games",
        "genre": "Computer Hacking",
        "rating": 9.2,
    },
    {
        "name": "Jobs",
        "genre": "Yet Another Steve Jobs movie",
        "rating": 7.4,
    },
    {
        "name": "National Lampoons: Christmas Vacation",
        "genre": "Holidays",
        "rating": 10
    },
    {
        "name": "Black Panther",
        "genre": "Superhero",
        "rating": 10
    },
    {
        "name": "Gangs of New York",
        "genre": "New York Crime",
        "rating": 1.1,
    },
    {
        "name": "When Harry Met Sally",
        "genre": "New York Romantic",
        "rating": 2.1,
    },
]


function addMovie(obj) {
    console.log("Added movie: " + obj.name);
    MovieData.push(obj);
}

function deleteMovie(obj) {
    for (var i = 0; i < MovieData.length; i++) {
        if (obj.name == MovieData[i].name) {
            console.log("Deleted movie: " + MovieData[i].name);
            MovieData.splice(i, 1);
            return;
        }
    }
    console.log("Couldn't delete movie with name: " + obj.name);
}

function getMovie(obj) {
    for (var i = 0; i < MovieData.length; i++) {
        if (obj.name == MovieData[i].name) {
            return MovieData[i];
        }
    }
    console.log("Couldn't find movie with name: " + obj.name);
}

//TODO: Write API endpoints here

/*Getting movie by name endpoint */
app.get('/movies/name/:id', function (req, res) {
    result = getMovie({ "name": req.params.id });
    if (result) {
        res.status(200).send(result);
    } else {
        res.status(500).send({ "error": "Couldn't find movie named: " + req.params.id });
    }
});

/** Start the web server and serve the index webpage */
app.use(express.static("web"));
app.listen(3000, () => console.log(`Server listening on port 3000!`))







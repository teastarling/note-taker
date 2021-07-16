const fs = require('fs')
const uniqid = require('uniqid')


module.exports = (app) => {
    let noteJSON = require('../db/db.json')
    app.get('/api/notes', (req, res) => res.json(noteJSON));

    app.post('/api/notes', (req, res) => {
        req.body.id = uniqid();
        noteJSON.push(req.body);
        let newNote = JSON.stringify(noteJSON);
        fs.writeFile(__dirname + '/../db/db.json', newNote, (err) => {
            if (err) throw err;
        });
        res.end();
    });

    app.delete('/api/notes/:id', (req, res) => {
        let filter = noteJSON.filter(note => {
            return note.id != req.params.id
        });
        let newNote = JSON.stringify(filter);
        fs.writeFileSync(__dirname + '/../db/db.json', newNote, (err) => {
            if (err) throw err;
        });
        res.end();
    })
};
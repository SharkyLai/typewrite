const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Notes

router.get('/', async (req, res) => {
    const notes = await loadNotes();
    res.send(await notes.find({}).toArray());
});

// Create Note

router.post('/', async (req, res) => {
    const notes = await loadNotes();
    await notes.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });
    res.status(201).send();
})

// Delete Note

async function loadNotes() {
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://SharkyLai:dr2gonite@typewrite.7vdax.mongodb.net/typewrite?retryWrites=true&w=majority', {
        useNewUrlParser: true
    });

    return client.db('typewrite').collection('notes');
}


module.exports = router;

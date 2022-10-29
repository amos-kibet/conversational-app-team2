const express = require('express')

const router = express.Router()

router.get('/', () => {})


//GET all chats
router.get('/', (req, res) => {
    res.json({mssg:'GET all chats'})
})

//GET a single chat
router.get('/:id', (req, res) => {
    res.json({mssg:'GET a single chat'})
})

//POST a new chat
router.post('/', (req, res) => {
    res.json({mssg:'POST all chats'})
})

//DELETE a chat
router.delete('/:id', (req, res) => {
    res.json({mssg:'DELETE a chat'})
})

//UPDATE a chat
router.patch('/:id', (req, res) => {
    res.json({mssg:'UPDATE a chat'})
})

module.exports = router
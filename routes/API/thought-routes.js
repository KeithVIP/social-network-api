const router = require('express').Router();
const {
    getThoughts,
    getThoughtByID,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
} = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getThoughts)
    .post(createThought);

router
    .route('/:id')
    .get(getThoughtByID)
    .put(updateThought)
    .delete(deleteThought);

router.route('/:thoughtId/reactions/')
    .post(addReaction)
    .delete(deleteReaction)

module.exports = router;
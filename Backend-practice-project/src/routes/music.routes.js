const express = require('express')
const router = express.Router()
const multer = require('multer')
const authMiddleware = require('../middlewares/auth.middleware')
const musicController = require('../controllers/music.controller')
const upload = multer({storage:multer.memoryStorage()})

router.post('/upload',authMiddleware.authArtist, upload.single('musix'), musicController.createMusic)
router.post('/album', authMiddleware.authArtist, musicController.createAlbum)
router.get('/',authMiddleware.authUser,musicController.getAllMusics)
router.get('/getAlbums',authMiddleware.authUser,musicController.getAllAlbums)
router.get('/getAlbums/:albumId',authMiddleware.authUser,musicController.getAllAlbumIds)
module.exports = router
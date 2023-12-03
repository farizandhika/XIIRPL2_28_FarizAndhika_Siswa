const express = require ('express')
const { route } = require('express/lib/application')
const router = express.Router()
const siswacontroller = require('../router/controllers/siswa')

router.get('/siswa/all', siswacontroller.index)

router.get('/siswa/:id', siswacontroller.show)

router.post('/siswa/add', siswacontroller.store)
    
router.put('/siswa/:id', siswacontroller.update)
  
router.delete('/siswa/:id', siswacontroller.delete)

module.exports = router
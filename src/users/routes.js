const { Router } = require("express");
const { route } = require("../hello/routes");


// CRUD:
// Create: endpoint que faz a criação de novos usuarios
// POST /users { ...user }
// 

// READ: endpoint que faz leitura de um usuario e um que lista usuarios
// GET /users { users: { ...users } }
// GET /users/:id { ...user }

// UPDATE: endpoint que faz a atualização de dados do usuário
// PUT /users/:id { ...updatableUser }

// DELETE: endpoint que remove um usuário
// DELETE /users/:id ''


const router = Router()

router.post('/', async (req, res) => {
  res.status(201).header('Location', '/users/???').send()
})

router.get('/', async (req, res) => {
  res.status(200).send({ users: {} })
})

router.get('/:id', async (req, res) => {
  res.status(200).send({})
})

router.put('/:id', async (req, res) => {
  res.status(200).send({})
})

router.delete('/:id', async (req, res) => {
  res.status(204).send()
})

module.exports = router

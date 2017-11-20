const express = require("express")
const auth = require('./auth')

module.exports = function(server) {
  /*
  * Rotas protegidas por Token JWT
  */
  const protectedApi = express.Router()

  server.use('/api', protectedApi)
  protectedApi.use(auth)

  const BillingCycle = require('../api/billing-cycle/billing-cycle-service')
  BillingCycle.register(protectedApi, '/billing-cycles')
  /*
  * Rotas abertas
  */
  const openApi = express.Router()
  server.use('/oapi', openApi)

  const AuthService = require('../api/user/user-auth-service')
  openApi.post('/login', AuthService.login)
  openApi.post('/signup', AuthService.signup)
  openApi.post('/validateToken', AuthService.validateToken)
}
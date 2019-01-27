const axios = require('axios')
const chai = require('chai')
chai.should()

const apiUrl = 'http://localhost:3000/api'

describe('Integrations tests for e-got REST API', () => {

  describe('Routes API', () => {
    it('Should get list of suggested routes',async () => {
      const result = await axios.get(`${apiUrl}/routes`)
      result.data.should.have.length.at.least(1)
    })
  })

  describe('Tracks API', () => {
    it('Should add new track', () => {

    })
  })

  describe('Evidences API', () => {
    it('Should add new evidence', () => {

    })

    it('Should get list of evidences for tourist view', async () => {
      const result = await axios.get(`${apiUrl}/evidences/tourist`)
      result.data.should.have.length.at.least(1)
    })

    it('Should get list of evidences for verificator view', async () => {
      const result = await axios.get(`${apiUrl}/evidences/verificator`)
      result.data.should.have.length.at.least(1)
    })
  })
})

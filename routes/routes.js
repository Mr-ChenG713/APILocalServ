const express = require('express');
const router = express.Router();
//post Model
const Servico = require('../models/Servico');
const Concelho = require('../models/Concelho');
const Distrito = require('../models/Distrito');

const { MongoClient } = require('mongodb');
const {MONGO_URI} = require('./../config');

const client = new MongoClient(MONGO_URI);

/**
 * @swagger
 * securityDefinitions:
 *    # locserv-api-key: abcdef12345
 *    APIKeyHeader:
 *      type: apiKey
 *      in: header
 *      name: locserv-api-key
 *    # /path?api_key=abcdef12345
 *    APIKeyQueryParam:
 *       type: apiKey
 *       in: query
 *       name: api_key
 */

/**
 * @swagger
 * definitions:
 *   Servico:
 *     type: object
 *     properties:
 *           nome:
 *             type: string
 *           tiposervico:
 *             type: string
 *           horario:
 *             type: string
 *           rua:
 *             type: string
 *           codigopostal:
 *             type: string
 *           concelho:
 *             type: string
 *           distrito:
 *             type: string
 *           lat:
 *             type: string
 *           long:
 *             type: string
 *     xml:
 *       name: Servico
 */

 /**
 * @swagger
 * security:
 *   - APIKeyHeader: [locserv-api-key]
 * paths:
 *   /servicos:
 *     post:
 *       tags:
 *       - Serviços
 *       summary: add new Serviço
 *       operationId: postServico
 *       consumes:
 *       - application/json
 *       - application/xml
 *       produces:
 *       - application/json
 *       - application/xml
 *       parameters:
 *       - in: body
 *         name: body
 *         description: Serviço object that needs to be added
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Servico'
 *       responses:
 *         405:
 *           description: Invalid input
 *       security:
 *         - APIKeyQueryParam: [api_key]
 */

//---------------------Post Serviço-------------------------//
router.post('/servicos', async (req, res) => {
    
    const newServico = new Servico(req.body);

    try {
        const collection = await newServico.save();
        if(!collection) throw Error('Something went wrong while saving the post');

        res.status(200).json(collection);
    } catch (err){
        res.status(400).json({msg: err});   
    }
});

//------------------------@routes GET servicos------------------------

/**
 * @swagger
 * paths:
 *   /servicos:
 *     get:
 *       tags:
 *       - Serviços
 *       summary: Listar todos serviço
 *       description: Listar todos serviço
 *       operationId: getServicos
 *       produces:
 *       - application/json
 *       - application/xml
 *       responses:
 *         '200':
 *           description: sucess
 *           schema:
 *             $ref: '#/definitions/Servico'
 *         '500':
 *           description: error
 */
router.get('/servicos', async (req, res) => {
    const query = req.query;
    try {
        const collection = await Servico.find(query);
        if(!collection) throw Error('No Items');
        res.status(200).json(collection);
    } catch (err){
        res.status(400).json({msg: err});   
    }
});

//------------------------@routes GET servicos por tipo------------------------

/**
 * @swagger
 * paths:
 *   /servicos/tiposervico:
 *     get:
 *       tags:
 *       - Serviços
 *       summary: Pesquisar Serviço por tipo
 *       description: Pesquisar Serviço por tipo
 *       operationId: getServicostipo
 *       produces:
 *       - application/json
 *       - application/xml
 *       parameters:
 *       - in: query
 *         name: tiposervico
 *         type: string
 *       responses:
 *         '200':
 *           description: sucess
 *           schema:
 *             $ref: '#/definitions/Servico'
 *         '500':
 *           description: error
 */
router.get('/servicos/tiposervico', async (req, res) => {
    const query = req.query;
    try {
        const collection = await Servico.find(query);
        if(!collection) throw Error('No Items');
        res.status(200).json(collection);
    } catch (err){
        res.status(400).json({msg: err});   
    }
});

//------------------------@routes GET servicos por concelho------------------------

/**
 * @swagger
 * paths:
 *   /servicos/concelho:
 *     get:
 *       tags:
 *       - Serviços
 *       summary: Pesquisar Serviço por concelho
 *       description: Pesquisar Serviço por concelho
 *       operationId: getServicosconcelho
 *       produces:
 *       - application/json
 *       - application/xml
 *       parameters:
 *       - in: query
 *         name: concelho
 *         type: string
 *       responses:
 *         '200':
 *           description: sucess
 *           schema:
 *             $ref: '#/definitions/Servico'
 *         '500':
 *           description: error
 */
router.get('/servicos/concelho', async (req, res) => {
    const query = req.query;
    try {
        const collection = await Servico.find(query);
        if(!collection) throw Error('No Items');
        res.status(200).json(collection);
    } catch (err){
        res.status(400).json({msg: err});   
    }
});

//------------------------@routes GET servicos por distrito------------------------

/**
 * @swagger
 * paths:
 *   /servicos/distrito:
 *     get:
 *       tags:
 *       - Serviços
 *       summary: Pesquisar Serviço por distrito
 *       description: Pesquisar Serviço por distrito
 *       operationId: getServicosdistrito
 *       produces:
 *       - application/json
 *       - application/xml
 *       parameters:
 *       - in: query
 *         name: distrito
 *         type: string
 *       responses:
 *         '200':
 *           description: sucess
 *           schema:
 *             $ref: '#/definitions/Servico'
 *         '500':
 *           description: error
 */
router.get('/servicos/concelho', async (req, res) => {
    const query = req.query;
    try {
        const collection = await Servico.find(query);
        if(!collection) throw Error('No Items');
        res.status(200).json(collection);
    } catch (err){
        res.status(400).json({msg: err});   
    }
});

//------------------------@routes GET servicos por distrito e concelho------------------------

/**
 * @swagger
 * paths:
 *   /servicos/distrito_concelho:
 *     get:
 *       tags:
 *       - Serviços
 *       summary: Pesquisar Serviço por distrito e concelho
 *       description: Pesquisar Serviço por distrito e concelho
 *       operationId: getServicosdistritoconcelho
 *       produces:
 *       - application/json
 *       - application/xml
 *       parameters:
 *       - in: query
 *         name: distrito
 *         type: string
 *       - in: query
 *         name: concelho
 *         type: string
 *       responses:
 *         '200':
 *           description: sucess
 *           schema:
 *             $ref: '#/definitions/Servico'
 *         '500':
 *           description: error
 */
router.get('/servicos/distrito_concelho', async (req, res) => {
    const query = req.query;
    try {
        const collection = await Servico.find(query);
        if(!collection) throw Error('No Items');
        res.status(200).json(collection);
    } catch (err){
        res.status(400).json({msg: err});   
    }
});

//------------------------@routes GET servicos por tipo serviço e concelho------------------------

/**
 * @swagger
 * paths:
 *   /servicos/tiposervico_concelho:
 *     get:
 *       tags:
 *       - Serviços
 *       summary: Pesquisar Serviço por tipo serviço e concelho
 *       description: Pesquisar Serviço por tipo serviço e concelho
 *       operationId: getServicostiposervicoconcelho
 *       produces:
 *       - application/json
 *       - application/xml
 *       parameters:
 *       - in: query
 *         name: tiposervico
 *         type: string
 *       - in: query
 *         name: concelho
 *         type: string
 *       responses:
 *         '200':
 *           description: sucess
 *           schema:
 *             $ref: '#/definitions/Servico'
 *         '500':
 *           description: error
 */
router.get('/servicos/tiposervico_concelho', async (req, res) => {
    const query = req.query;
    try {
        const collection = await Servico.find(query);
        if(!collection) throw Error('No Items');
        res.status(200).json(collection);
    } catch (err){
        res.status(400).json({msg: err});   
    }
});

//------------------------@routes GET servicos por tipo serviço e distrito------------------------

/**
 * @swagger
 * paths:
 *   /servicos/tiposervico_distrito:
 *     get:
 *       tags:
 *       - Serviços
 *       summary: Pesquisar Serviço por tipo serviço e distrito
 *       description: Pesquisar Serviço por tipo serviço e distrito
 *       operationId: getServicostiposervicodistrito
 *       produces:
 *       - application/json
 *       - application/xml
 *       parameters:
 *       - in: query
 *         name: tiposervico
 *         type: string
 *       - in: query
 *         name: distrito
 *         type: string
 *       responses:
 *         '200':
 *           description: sucess
 *           schema:
 *             $ref: '#/definitions/Servico'
 *         '500':
 *           description: error
 */
router.get('/servicos/tiposervico_distrito', async (req, res) => {
    const query = req.query;
    try {
        const collection = await Servico.find(query);
        if(!collection) throw Error('No Items');
        res.status(200).json(collection);
    } catch (err){
        res.status(400).json({msg: err});   
    }
});

//------------------------@routes GET servicos por tipo serviço, distrito e concelho------------------------

/**
 * @swagger
 * paths:
 *   /servicos/tiposervico_distrito_concelho:
 *     get:
 *       tags:
 *       - Serviços
 *       summary: Pesquisar Serviço por tipo serviço, distrito e concelho
 *       description: Pesquisar Serviço por tipo serviço, distrito e concelho
 *       operationId: getServicostiposervicodistritoconcelho
 *       produces:
 *       - application/json
 *       - application/xml
 *       parameters:
 *       - in: query
 *         name: tiposervico
 *         type: string
 *       - in: query
 *         name: distrito
 *         type: string
 *       - in: query
 *         name: concelho
 *         type: string
 *       responses:
 *         '200':
 *           description: sucess
 *           schema:
 *             $ref: '#/definitions/Servico'
 *         '500':
 *           description: error
 */
router.get('/servicos/tiposervico_distrito_concelho', async (req, res) => {
    const query = req.query;
    try {
        const collection = await Servico.find(query);
        if(!collection) throw Error('No Items');
        res.status(200).json(collection);
    } catch (err){
        res.status(400).json({msg: err});   
    }
});

/*********************
 * *******************
 *********************/

 /**
 * @swagger
 * definitions:
 *   Concelho:
 *     type: object
 *     properties:
 *           concelho:
 *             type: string
 *     xml:
 *       name: Concelho
 */

 /**
 * @swagger
 * security:
 *   - APIKeyHeader: [locserv-api-key]
 * paths:
 *   /concelhos:
 *     post:
 *       tags:
 *       - Concelhos
 *       summary: a new concelho
 *       operationId: postConcelho
 *       consumes:
 *       - application/json
 *       - application/xml
 *       produces:
 *       - application/json
 *       - application/xml
 *       parameters:
 *       - in: body
 *         name: body
 *         description: Concelho object that needs to be added
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Concelho'
 *       responses:
 *         405:
 *           description: Invalid input
 *       security:
 *         - APIKeyQueryParam: [api_key]
 */
 
//---------------------Post Concelho-------------------------//
router.post('/concelhos', async (req, res) => {
    
    const newConcelho = new Concelho(req.body);

    try {
        const collection = await newConcelho.save();
        if(!collection) throw Error('Something went wrong while saving the post');

        res.status(200).json(collection);
    } catch (err){
        res.status(400).json({msg: err});   
    }
});

//------------------------@routes GET concelho------------------------

/**
 * @swagger
 * paths:
 *   /concelhos:
 *     get:
 *       tags:
 *       - Concelhos
 *       summary: Listar todos Concelhos
 *       description: Listar todos Concelhos
 *       operationId: getConcelhos
 *       produces:
 *       - application/json
 *       - application/xml
 *       responses:
 *         '200':
 *           description: sucess
 *           schema:
 *             $ref: '#/definitions/Concelho'
 *         '500':
 *           description: error
 */
router.get('/concelhos', async (req, res) => {
    const query = req.query;
    try {
        const collection = await Concelho.find(query);
        if(!collection) throw Error('No Items');
        res.status(200).json(collection);
    } catch (err){
        res.status(400).json({msg: err});   
    }
});

/*********************
 * *******************
 *********************/

  /**
 * @swagger
 * definitions:
 *   Distrito:
 *     type: object
 *     properties:
 *           distrito:
 *             type: string
 *     xml:
 *       name: Distrito
 */

 /**
 * @swagger
 * security:
 *   - APIKeyHeader: [locserv-api-key]
 * paths:
 *   /distritos:
 *     post:
 *       tags:
 *       - Distritos
 *       summary: add new Distrito
 *       operationId: postDistrito
 *       consumes:
 *       - application/json
 *       - application/xml
 *       produces:
 *       - application/json
 *       - application/xml
 *       parameters:
 *       - in: body
 *         name: body
 *         description: Distrito object that needs to be added
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Distrito'
 *       responses:
 *         405:
 *           description: Invalid input
 *       security:
 *         - APIKeyQueryParam: [api_key]
 */

 //---------------------Post Distritos-------------------------//
router.post('/distritos', async (req, res) => {
    
    const newDistrito = new Distrito(req.body);

    try {
        const collection = await newDistrito.save();
        if(!collection) throw Error('Something went wrong while saving the post');

        res.status(200).json(collection);
    } catch (err){
        res.status(400).json({msg: err});   
    }
});

//------------------------@routes GET distrito------------------------

/**
 * @swagger
 * paths:
 *   /distritos:
 *     get:
 *       tags:
 *       - Distritos
 *       summary: Listar todos Distritos
 *       description: Listar todos Distritos
 *       operationId: getDistritos
 *       produces:
 *       - application/json
 *       - application/xml
 *       responses:
 *         '200':
 *           description: sucess
 *           schema:
 *             $ref: '#/definitions/Distrito'
 *         '500':
 *           description: error
 */
router.get('/distritos', async (req, res) => {
    const query = req.query;
    try {
        const collection = await Distrito.find(query);
        if(!collection) throw Error('No Items');
        res.status(200).json(collection);
    } catch (err){
        res.status(400).json({msg: err});   
    }
});


module.exports = router;

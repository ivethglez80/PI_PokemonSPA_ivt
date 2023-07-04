const { Router } = require('express');
const PokeRuta = require ('./PokeRuta');
const TypesRuta = require ('./TypesRuta');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/types', TypesRuta);
router.use('/pokemon', PokeRuta);

module.exports = router;

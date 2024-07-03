const express = require('express');
const UserRouter = require('./users');
const ProblemRouter = require('./problems');
const NotesRouter = require('./notes');
const CheckoutRouter = require('./Checkout'); 


const router = express.Router();

router.use('/users', UserRouter);
router.use('/problems', ProblemRouter);
router.use('/notes', NotesRouter);
router.use('/checkout', CheckoutRouter); 



module.exports = router;

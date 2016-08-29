import express from 'express';
import { renderReactTpl } from '../lib/renderReactTpl';
import Index from '../views/Index';

const router = express.Router(); // eslint-disable-line

/* GET home page. */
router.get('/', (req, res) => {
  res.send(renderReactTpl(Index, { title: 'María Sofía Riojas' }));
});

export default router;

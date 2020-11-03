import express from 'express';
const router = express.Router();

import getVersion from '../controllers/versioning';

router.get('/', getVersion);

export default router;

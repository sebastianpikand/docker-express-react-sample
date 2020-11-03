import createError from 'http-errors';
import asyncHandler from '../helpers/asyncHandler';

const getVersion = asyncHandler(async (req, res, next) => {
  res.json({
    version: '0',
  });
});

export default getVersion;

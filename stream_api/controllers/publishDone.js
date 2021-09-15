import lodash from 'lodash';

const publishDone = (req, res, next) => {
  const streamInfo = req.body;
  const streamSecretKey = lodash.get(streamInfo, 'name');
  console.log(`User ${streamSecretKey} has finishes the stream!`);
  if(streamSecretKey === 'hoang') {
    return res.status(200).json({ verified: true });
  }
  next(new Error('Unverified'));
};

export default publishDone;

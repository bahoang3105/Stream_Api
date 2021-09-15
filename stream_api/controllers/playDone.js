import lodash from 'lodash';

const playDone = (req, res, next) => {
  const streamInfo = req.body;
  const streamSecretKey = lodash.get(streamInfo, 'name');
  console.log(`Stream ${streamSecretKey} has finished!`);
  if(streamSecretKey === 'hoang') {
    return res.status(200).json({ verified: true });
  }
  next(new Error('Unverified'));
};

export default playDone;

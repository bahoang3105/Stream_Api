import lodash from 'lodash';

const play = (req, res, next) => {
  const streamInfo = req.body;
  const streamSecretKey = lodash.get(streamInfo, 'name');
  console.log(`Stream ${streamSecretKey} begin playing!`);
  if(streamSecretKey === 'hoang') {
    return res.status(200).json({ verified: true });
  }
  next(new Error('Unverified'));
};

export default play;
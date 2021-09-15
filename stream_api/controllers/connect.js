const connect = (req, res, next) => {
  const { addr, app } = req.body;
  // if stream address is not localhost 
  console.log(addr);
  if(addr !== '127.0.0.1' && addr !== 'localhost') {
    return next(new Error('Stream address is not localhost!'));
  }
  console.log(`App ${app} has been connected!`);
  return res.status(200).json({ connectSuccess: true });
};

export default connect;
// ffmpeg -re -i /home/hoang/Downloads/movie.mp4 
// -vcodec copy -loop -1 -c:a aac -b:a 160k -ar 44100 
// -strict -2 -f flv rtmp://127.0.0.3/show/hoang

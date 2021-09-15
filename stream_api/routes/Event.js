import { Router }  from 'express';
import connect from '../controllers/connect';
import playDone from '../controllers/playDone';
import play from '../controllers/play';
import liveAuth from '../controllers/liveAuth';
import publishDone from '../controllers/publishDone';

const router = Router();

router.post('/connect', connect);
router.post('/play', play);
router.post('/live_auth', liveAuth);
router.post('/publish_done', publishDone);
router.post('/play_done', playDone);

export default router;

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

// Import Routes
import event from './routes/Event';

app.use('/handleEvent', event);

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on ${PORT}`));
import { join } from 'path';
import express from 'express';
import bp from 'body-parser';
import routes from './routes/index';
import stateRouting from './middleware/routing.mw';


const CLIENT_PATH = join(__dirname, '../../client');
const app = express();


app.use(express.static(CLIENT_PATH));
app.use(bp.json());
app.use(bp.urlencoded({ extended: false }));
app.use('/api', routes);
app.use(stateRouting);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});

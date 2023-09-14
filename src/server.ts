import app from './app';

import { AppDataSource } from './data-source';

(async () => {
    await AppDataSource.initialize().catch((error) => {
        console.log('error', error);
    });
    app.listen(3000, () => console.log('app running at http://localhost:3000'));
})();

import app from './app';
import database from './database';

database.sync();
console.log('Database are running at 3306');


app.listen(3000);
console.log('Server running at 3000');
import { createReadStream } from 'fs';
var rs = createReadStream('../url/summer.html');
rs.on('open', () => {
    console.log('The file Is Open!');
});
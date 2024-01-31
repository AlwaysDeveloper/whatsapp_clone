import file from 'fs';
import path from 'path';

const contents = file.readFileSync(path.join(path.resolve(), process.env.CONFIG), { encoding: 'utf-8' });

const config = JSON.parse(contents);

export default config;


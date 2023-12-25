import file from 'fs';
import path from 'path';

const env = process.env.NODE_ENV;

const contents = file.readFileSync(path.join(path.resolve(), `config/${env}.json`), { encoding: 'utf-8' });

const config = JSON.parse(contents);

export default config;


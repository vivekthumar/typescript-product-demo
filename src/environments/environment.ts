import * as fs from 'fs';
import * as path from 'path';
import { config as configDotenv } from 'dotenv';

class Environment {
	public port: number;

	public env: string;

  public DB_NAME: string;

  public DB_HOST: string;

  public DB_USERNAME: string;

  public DB_PASSWORD: string;

	constructor() {
    this.setEnvironment();
		this.env = process.env.NODE_ENV;
		this.port = Number(process.env.PORT);
    this.DB_NAME = process.env.DB_NAME;
    this.DB_HOST = process.env.DB_HOST;
    this.DB_USERNAME = process.env.DB_USERNAME;
    this.DB_PASSWORD = process.env.DB_PASSWORD;
	}


	public setEnvironment(): void {
		const envPath: string = path.resolve(__dirname, '../../', '.env');
		if (!fs.existsSync(envPath)) {
			throw new Error('.env file is missing in root directory');
		}
		configDotenv({ path: envPath });
	}
}

export default Environment;

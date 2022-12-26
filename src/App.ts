import http from 'http';
import cors from 'cors';
import express from 'express';
import registerRoutes from './routes';

export default class App {
	public express: express.Application;

	public httpServer: http.Server;

	public async init(): Promise<void> {
		this.express = express();
		this.httpServer = http.createServer(this.express);

		this.middleware();

		this.routes();
    
	}

	private routes(): void {
		this.express.use('/api', registerRoutes());
	}

	private middleware(): void {
		this.express.use(express.json({ limit: '100mb' }));
		this.express.use(
			express.urlencoded({ limit: '100mb', extended: true }),
		);
		this.express.use(cors());
	}
}

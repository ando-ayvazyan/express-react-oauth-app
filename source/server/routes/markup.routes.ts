import express from 'express';
import {RoutesConfig} from './config/routes.config';
import * as markupController from '../controller/markup.controller';
import * as authMiddleware from '../middleware/auth.middleware';

export class MarkupRoutes extends RoutesConfig {
    public constructor(app: express.Application) {
        super(app, 'MarkupRoutes');
    }

    public configureRoutes() {
        this
            .app
            .get(`*`, [
                authMiddleware.checkPageAvailability,
                markupController.index
            ]);
        return this.app;
    }
}
import express from 'express';
import {RoutesConfig} from './config/routes.config';
import * as authMiddleware from '../middleware/auth.middleware';
import * as authController from '../controller/auth.controller';
import * as markupController from '../controller/markup.controller';

export class AuthRoutes extends RoutesConfig {
    public constructor(app: express.Application) {
        super(app, 'AuthRoutes');
    }

    public configureRoutes() {
        this
            .app
            .get(`/github/handler`, [
                authMiddleware.validateAuthCodeExists,
                authController.authenticate,
                markupController.index
            ]);
        return this.app;
    }
}
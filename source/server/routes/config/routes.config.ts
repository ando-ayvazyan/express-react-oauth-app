import express from 'express';

abstract class RoutesConfig {
    public app: express.Application;
    public name: string;

    protected constructor(app: express.Application, name: string) {
        this.app = app;
        this.name = name;
        this.configureRoutes();
    }

    public getName() {
        return this.name;
    }

    public abstract configureRoutes(): express.Application;
}

export {
    RoutesConfig,
}
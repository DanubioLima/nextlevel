import express, { request, response } from "express";

import PointsControllers from "./controllers/PointsControllers";
import ItemsControllers from "./controllers/ItemsControllers";

const pointsControllers = new PointsControllers();
const itemsControllers = new ItemsControllers();

const routes = express.Router();

routes.get("/items", itemsControllers.index);
routes.post("/points", pointsControllers.create);
routes.get("/points", pointsControllers.index);
routes.get("/points/:id", pointsControllers.show);

export default routes;

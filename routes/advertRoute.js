import { Router } from "express";
import * as advertController     from  "../controller/advertController.js";

const advertRouter = Router();

advertRouter.post("/advert", advertController.createAdvert);
advertRouter.put("/advert/:id", advertController.alterAdvert);
advertRouter.delete("/advert/:id", advertController.deleteAdvert);
advertRouter.get("/advert/:id", advertController.getAdvert);
advertRouter.get("/advert/name/:nameAdvert", advertController.findAdvert);
advertRouter.get("/adverts", advertController.getAllAdvert);

export default advertRouter;
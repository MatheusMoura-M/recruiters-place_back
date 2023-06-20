import appDataSource from "../../data-source";
import { Comments, Techs, User } from "../../entities";

const userRepo = appDataSource.getRepository(User);
const commentsRepo = appDataSource.getRepository(Comments);
const techsRepo = appDataSource.getRepository(Techs);

export { userRepo, commentsRepo, techsRepo };

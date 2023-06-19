import appDataSource from "../../data-source";
import { Comments, User } from "../../entities";

const userRepo = appDataSource.getRepository(User);
const commentsRepo = appDataSource.getRepository(Comments);

export { userRepo, commentsRepo };

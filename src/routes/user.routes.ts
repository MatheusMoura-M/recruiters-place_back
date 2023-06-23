import { Router } from "express";
import { bodyValidator, validateTokenMiddleware } from "../middlewares";
import {
  createUserController,
  deleteUserController,
  updateUserController,
  userProfileController,
  getUserByIdController,
  getAllUsersController,
} from "../controllers/user";
import {
  userCreateRequestSchema,
  userUpdateRequestSchema,
} from "../schemas/user";

const userRoutes = Router();

userRoutes.post(
  "",
  bodyValidator(userCreateRequestSchema),
  createUserController
);

userRoutes.get("", getAllUsersController);
userRoutes.get("/profile", validateTokenMiddleware, userProfileController);

userRoutes.patch(
  "",
  validateTokenMiddleware,
  bodyValidator(userUpdateRequestSchema),
  updateUserController
);

userRoutes.delete("", validateTokenMiddleware, deleteUserController);

userRoutes.get("/:id", getUserByIdController);

export default userRoutes;

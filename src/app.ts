import "express-async-errors"
import "reflect-metadata"
import express from "express"
import userRoutes from "./routers/users.routes"
import sessionRoutes from "./routers/session.routes"
import handleError from "./errors/handleError"


const app = express()
app.use(express.json())

app.use("/users", userRoutes)
app.use("/login", sessionRoutes)

app.use(handleError)

export default app
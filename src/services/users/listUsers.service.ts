import { User } from "../../entities/user.entity";
import AppDataSource from "../../data-source";
import { userWithoutPasswordSerializer } from "../../serializers/user.serializers";
import { IUser } from "../../interfaces/users";

const listUsersService = async() => {
    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find()

    const removePass = users.map((el) => {
        const { password: pass, ...user} = el

        return user
    })

    console.log(removePass);
    

    return removePass
}

export default listUsersService
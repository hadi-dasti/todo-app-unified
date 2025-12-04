import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { UserModule } from "src/users/user.module";


@Module({
    imports:[UserModule]
})

export class AuthModule{}

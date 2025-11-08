import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // envFilePath: ".env",
    }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "host.docker.internal",
      port: 5432,
      username: "todo_user",
      password: "todo_pass",
      database: "todo_db",
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
})
export class AppModule {}

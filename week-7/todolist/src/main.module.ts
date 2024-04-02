import { Global, Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './platform/database/database.module';

@Global()
@Module({
  imports: [UsersModule, AuthModule, DatabaseModule],
  exports: [DatabaseModule],
})
export class MainModule {}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';


import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    ConfigModule.forRoot(),

    MongooseModule.forRoot( 'mongodb://mongo:iDtMlXCHiMsKGYAhDetQpxymikesqBpX@autorack.proxy.rlwy.net:37276', {
      dbName : 'auth-db',
    } ),

    AuthModule,

  ],
  controllers: [],
  providers: [],
})
export class AppModule {

}

import { Module } from '@nestjs/common';
import { AdsController } from './ads.controller';
import { AdsService } from './ads.service';
import { OpenaiConfig } from '../../config/openai.config';
import { PostCompletionCommand } from './commands/PostCompletionCommand';
@Module({
  controllers: [AdsController],
  providers: [AdsService, OpenaiConfig, PostCompletionCommand],
  imports: [],
})
export class AdsModule {}

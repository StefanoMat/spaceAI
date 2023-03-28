import { Injectable } from '@nestjs/common';
import { PostCompletionCommand } from './commands/PostCompletionCommand';
import { CreateInstagramCaptionDto } from './dto/create-instagram-caption.dto';

@Injectable()
export class AdsService {
  constructor(private readonly postCompletionCommand: PostCompletionCommand) {}
  async generateInstagramCaption(
    generateInstagramCaptionDto: CreateInstagramCaptionDto,
  ) {
    const response = await this.postCompletionCommand.handle(
      `Gerar 5 instagram caption em portugues-br, para vender um ${generateInstagramCaptionDto.product}, ${generateInstagramCaptionDto.sellerDescription}. Pode incluir emojis. Inclua nova linha em braca a cada opção.`,
      2000,
      0.8,
    );
    return response;
  }
}

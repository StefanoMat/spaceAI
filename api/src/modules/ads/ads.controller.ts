import { Controller, Post, Body } from '@nestjs/common';
import { AdsService } from './ads.service';
import { CreateInstagramCaptionDto } from './dto/create-instagram-caption.dto';

@Controller('ads')
export class AdsController {
  constructor(private readonly adsService: AdsService) {}

  @Post('/instagram/captions')
  async generateInstagramCaption(
    @Body() createInstagramCaptionDto: CreateInstagramCaptionDto,
  ) {
    console.log(
      'AdsController.generateInstagramCaption:',
      createInstagramCaptionDto,
    );

    return this.adsService.generateInstagramCaption(createInstagramCaptionDto);
  }
}

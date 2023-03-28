import { Injectable } from '@nestjs/common';
import { Configuration, OpenAIApi } from 'openai';

@Injectable()
export class OpenaiConfig {
  private readonly openai: OpenAIApi;

  constructor() {
    console.log('env', process.env.API_KEY);

    const configuration = new Configuration({
      apiKey: process.env.API_KEY,
      organization: process.env.ORGANIZATION,
    });
    this.openai = new OpenAIApi(configuration);
  }

  public getOpenaiInstance(): OpenAIApi {
    return this.openai;
  }
}

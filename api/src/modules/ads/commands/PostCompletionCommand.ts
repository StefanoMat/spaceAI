import { Injectable } from '@nestjs/common';
import { OpenAIApi } from 'openai';
import { OpenaiConfig } from 'src/config/openai.config';

@Injectable()
export class PostCompletionCommand {
  private readonly openai: OpenAIApi;
  constructor(private readonly openaiConfig: OpenaiConfig) {
    this.openai = this.openaiConfig.getOpenaiInstance();
  }

  async handle(prompt: string, maxTokens: number, temperature: number) {
    try {
      console.log(prompt, maxTokens, temperature);
      const response = await this.openai.createCompletion({
        model: 'text-davinci-003',
        prompt: prompt,
        max_tokens: maxTokens,
        temperature: temperature,
      });
      console.log(response.data.choices[0].text);
      return response.data.choices[0].text;
    } catch (error) {
      console.log(error.message);
    }
  }
}

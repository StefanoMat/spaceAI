export class CreateInstagramCaptionDto {
  product: string;
  creativity: number;
  hashtags: string;
  captionLength: 'short' | 'medium' | 'long';
  sellerDescription?: string;
  includeWords?: string;
  targetAudience?: string;
}

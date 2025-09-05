import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class LimitePipe<String> implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    return value.substring(0, 10);
  }
}

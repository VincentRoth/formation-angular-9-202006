import { TruncatePipe } from './truncate.pipe';

describe('TruncatePipe', () => {
  let pipe: TruncatePipe;

  beforeEach(() => {
    pipe = new TruncatePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('text should be truncated', () => {
    expect(pipe.transform('mon texte', 5)).toEqual('mo...');
  });

  it('text should NOT be truncated', () => {
    expect(pipe.transform('mon texte', 10)).toEqual('mon texte');
  });

  it('should process null value', () => {
    expect(pipe.transform(null)).toBeNull();
  });
});

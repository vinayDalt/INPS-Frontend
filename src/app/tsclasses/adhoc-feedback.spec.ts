import { AdhocFeedback } from './adhoc-feedback';

describe('AdhocFeedback', () => {
  it('should create an instance', () => {
    return expect(new AdhocFeedback(" ",7," "," "," ",new Date())).toBeTruthy();
  });
});

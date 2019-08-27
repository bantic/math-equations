import { UnaryTerm, BinaryTerm, Operator } from '../src/equation';

describe('UnaryTerm', () => {
  test('should evaluate', () => {
    let eq = new UnaryTerm(5);
    expect(eq.value()).toBe(5);
  });
});

describe('BinaryTerm', () => {
  test('should evaluate', () => {
    let l = new UnaryTerm(2);
    let r = new UnaryTerm(5);
    let eq = new BinaryTerm(l, r, Operator.PLUS);

    expect(eq.value()).toBe(7);
  });
});

abstract class Term {
  abstract value(): number;
}

export class UnaryTerm extends Term {
  private _value: number;
  constructor(value: number) {
    super();
    this._value = value;
  }

  value() {
    return this._value;
  }
}

export enum Operator {
  PLUS,
  MINUS,
  MULTIPLY,
  DIVIDE
}

export class BinaryTerm extends Term {
  private _left: Term;
  private _right: Term;
  private _op: Operator;
  constructor(l: Term, r: Term, op: Operator) {
    super();
    this._left = l;
    this._right = r;
    this._op = op;
  }

  value() {
    let l = this._left.value();
    let r = this._right.value();
    switch (this._op) {
      case Operator.PLUS:
        return l + r;
      case Operator.MINUS:
        return l - r;
      case Operator.DIVIDE:
        return l / r;
      case Operator.MULTIPLY:
        return l * r;
    }
  }
}

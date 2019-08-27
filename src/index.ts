import { UnaryTerm } from './equation';

export default function sayHi() {
  let eq = new UnaryTerm(5);
  console.log('hi' + eq.value());
}

import { MethodNames, Taps } from "../types/declares";

export const config = [
  {
    path: "/",
    type: Taps.mock,
    rule: [
      {
        rule: "test|1-12",
        value: 123123,
        type: Taps.mock
      },
      {
        rule: "324|1-12",
        value: 123123,
        type: Taps.mock
      },
      {
        rule: "asdf|1-12",
        value: 123123,
        type: Taps.mock
      },
      {
        type: Taps.random,
        methodName: MethodNames.clast,
        args: [212]
      },
      {
        type: Taps.random,
        methodName: "boolean",
        args: [123123, 3241234]
      }
    ],
    value: undefined
  }
];

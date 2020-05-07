import { MethodNames, Taps } from "../types/declares";

export const config = [
  {
    path: "/text",
    type: Taps.random,
    methodName: MethodNames.boolean,
    args: []
  },
  {
    path: "/text2",
    type: Taps.mock,
    rule: "text|1-12",
    value: "21312"
  },
  {
    path: "/test4",
    type: Taps.mock,
    rules: [
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
    ]
  }
];

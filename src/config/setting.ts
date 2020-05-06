export enum Taps {random = "random", mock = "mock"};
export const config = [
  {
    path: "/text",
    type: Taps.random,
    methodName: "boolean",
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
        methodName: "boolean",
        value: [],
        type: Taps.random
      }
    ]
  }
];

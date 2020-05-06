declare type random = {
  "path": string
  "rule": string
  "args": Array<any>
}

declare type mock = {
  "path": string,
  "rule": string,
  "value": string
}

declare type Mock = {
  "random": random[],
  "mock": mock[]
}
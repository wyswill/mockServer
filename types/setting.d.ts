declare type random = [{
  "path": string;
  "rule": {
    "methordName": string
    "args": {
      "max": string,
      "min": string,
      "current": string
    }
  };
}]

declare type mock = [
  {
    "path": string,
    "rule": string
  }
]
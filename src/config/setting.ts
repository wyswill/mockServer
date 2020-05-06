module.exports = {
  "random": [
    {
      path: "/date",
      rule: "boolean",
      args: [1, 5, true]
    },
    {
      path: "/natural",
      rule: "natural",
      args: []
    },
    {
      path: "/integer",
      rule: "integer",
      args: []
    },
    {
      path: "/float",
      rule: "float",
      args: [10, 100]
    },
    {
      path: "/image",
      rule: "image",
      args: [100]
    }
  ],
  "mock": [
    {
      path: "/test1",
      rule: "text|1-12",
      value: "asdf123123"
    },
    {
      path: "/test2",
      rule: "number|1-10",
      value: [1, 2, 3, 4, 23, 21]
    },
    {
      path: "/test3",
      rule: "name|2",
      value: {
        "age": 12,
        "year": 2020,
        "name": "12312",
        "school": "qweqw"
      }
    }, {
      path: "/test4",
      rule: "name|1-4",
      value: {
        "age": 12,
        "year": 2020,
        "name": "12312",
        "school": "qweqw"

      }
    },
    {
      path: "/test5",
      rule: "regexp1",
      value: /[a-z][A-Z][0-9]/
    }
  ]
};
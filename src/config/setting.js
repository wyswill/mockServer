"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Taps;
(function (Taps) {
    Taps["random"] = "random";
    Taps["mock"] = "mock";
})(Taps = exports.Taps || (exports.Taps = {}));
exports.config = [
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
                rule: "asdf|1-12",
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
                methodName: "boolean",
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

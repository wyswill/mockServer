"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var declares_1 = require("../types/declares");
exports.config = [
    {
        path: "/text",
        type: declares_1.Taps.random,
        methodName: declares_1.MethodNames.boolean,
        args: []
    },
    {
        path: "/text2",
        type: declares_1.Taps.mock,
        rule: "text|1-12",
        value: "21312"
    },
    {
        path: "/test4",
        type: declares_1.Taps.mock,
        rules: [
            {
                rule: "test|1-12",
                value: 123123,
                type: declares_1.Taps.mock
            },
            {
                rule: "324|1-12",
                value: 123123,
                type: declares_1.Taps.mock
            },
            {
                rule: "asdf|1-12",
                value: 123123,
                type: declares_1.Taps.mock
            },
            {
                type: declares_1.Taps.random,
                methodName: declares_1.MethodNames.clast,
                args: [212]
            },
            {
                type: declares_1.Taps.random,
                methodName: "boolean",
                args: [123123, 3241234]
            }
        ]
    }
];

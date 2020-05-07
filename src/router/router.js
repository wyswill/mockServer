"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
///<reference path="../types/setting.d.ts"/>
var express = __importStar(require("express"));
var setting_1 = require("../config/setting");
var Mocks = require("mockjs");
var router = express.Router();
setting_1.config.map(function (ele) {
    router.get(ele.path, (function (req, res) {
        var _a;
        switch (ele.type) {
            case setting_1.Taps.mock:
                var t_1 = {};
                var resdata_1 = {};
                if (ele.rules) {
                    ele.rules.map(function (val, index) {
                        var _a;
                        if (val.type == setting_1.Taps.mock)
                            t_1["" + val.rule] = val.value;
                        else {
                            // @ts-ignore
                            resdata_1[val.methodName + "_" + index] = (_a = Mocks.Random)[val.methodName].apply(_a, val.args);
                        }
                    });
                }
                else
                    t_1["" + ele.rule] = ele.value;
                Object.assign(resdata_1, Mocks.mock(t_1));
                res.json(resdata_1);
                break;
            case setting_1.Taps.random:
                // @ts-ignore
                if (Mocks.Random[ele.methodName]) {
                    // @ts-ignore
                    res.json((_a = Mocks.Random)[ele.methodName].apply(_a, ele.args));
                }
                else
                    res.sendStatus(404);
                break;
        }
    }));
});
// if (mock.random) {
//   mock.random.map((ele: random) => {
//     router.get(ele.path, ((req: any, res: any) => {
//       if (Mocks.Random[ele.rule])
//         res.json(Mocks.Random[ele.rule](...ele.args));
//       else res.sendStatus(404);
//     }));
//   });
// }
module.exports = router;

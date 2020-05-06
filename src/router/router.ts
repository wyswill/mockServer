///<reference path="../types/setting.d.ts"/>
import * as express from "express";
import { config, Taps } from "../config/setting";

const Mocks = require("mockjs");
const router = express.Router();
config.map((ele) => {
  router.get(ele.path, ((req, res) => {
    switch (ele.type) {
      case Taps.mock:
        let t: any = {};
        if (ele.rules) {
          ele.rules.map((val) => {
            t[`${val.rule}`] = val.value;
          });
        } else t[`${ele.rule}`] = ele.value;
        res.send(Mocks.mock(t));
        break;
      case Taps.random:
        // @ts-ignore
        if (Mocks.Random[ele.methodName]) {
          // @ts-ignore
          res.json(Mocks.Random[ele.methodName](...ele.args));
        } else res.sendStatus(404);
        break;
      default:
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
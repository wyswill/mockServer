///<reference path="../types/setting.d.ts"/>
import * as express from "express";
import { config } from "../config/setting";
import { Taps } from "../types/declares";

const Mocks = require("mockjs");
const router = express.Router();
config.map((ele) => {
  router.get(ele.path, ((req, res) => {
    switch (ele.type) {
      case Taps.mock:
        let t: any = {};
        let resdata: any = {};
        if (ele.rules) {
          ele.rules.map((val, index) => {
            if (val.type == Taps.mock)
              t[`${val.rule}`] = val.value;
            else {
              if (resdata[`${val.methodName}`]) {
                // @ts-ignore
                resdata[`${val.methodName}_${index}`] = Mocks.Random[val.methodName](...val.args);
              } else {
                // @ts-ignore
                resdata[`${val.methodName}`] = Mocks.Random[val.methodName](...val.args);
              }
            }
          });
        } else t[`${ele.rule}`] = ele.value;
        Object.assign(resdata, Mocks.mock(t));
        res.json(resdata);
        break;
      case Taps.random:
        // @ts-ignore
        if (Mocks.Random[ele.methodName]) {
          // @ts-ignore
          res.json(Mocks.Random[ele.methodName](...ele.args));
        } else res.sendStatus(404);
        break;
    }
  }));
});

module.exports = router;
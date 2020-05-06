///<reference path="../types/setting.d.ts"/>

import * as express from "express";

const Mocks = require("mockjs");
const router = express.Router();
const mock: Mock = require("../config/setting");
if (mock.random) {
  mock.random.map((ele: random) => {
    router.get(ele.path, ((req: any, res: any) => {
      if (Mocks.Random[ele.rule])
        res.json(Mocks.Random[ele.rule](...ele.args));
      else res.sendStatus(404);
    }));
  });
}
if (mock.mock) {
  mock.mock.map((ele: mock) => {
    router.get(ele.path, ((req: any, res: any) => {
      let t: any = {};
      t[`${ele.rule}`] = ele.value;
      res.send(Mocks.mock(t));
    }));
  });
}

module.exports = router;
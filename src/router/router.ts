///<reference path="../../types/setting.d.ts"/>

import * as express from "express";

const Mock = require("mockjs");
const router = express.Router();
const { random: random, mock: mock } = require("../../config/setting");
console.log({ random, mock });
if (random) {
  random.map((ele) => {
    console.log(ele);
  });
}
// router.get("/", (req: any, res: any) => {
//   const data: string = mock.mock({
//     "list|1-10": [{
//       "id|+1": 1
//     }]
//   });
//   res.send(data);
// });

module.exports = router;
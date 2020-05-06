import * as express from "express";

const mock = require("mockjs");
const router = express.Router();
router.get("/", (req: any, res: any) => {
  const data: string = mock.mock({
    "list|1-10": [{
      "id|+1": 1
    }]
  });
  res.send(data);
});

module.exports = router;
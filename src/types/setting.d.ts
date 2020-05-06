import { Taps } from "../config/setting";


declare type mockDateItemMock = {
  path: string
  type: Taps.mock
  rule: string
  args: Array<mockDateItemMock2 | any>
}

declare type mockDateItemMock2 = {
  rule: string,
  value: any[],
  type: Taps.mock
}
declare type mockDateItemRandom = {
  path: string
  type: Taps.random
  methodName: string
  args: any[]
}

declare type config = Array<mockDateItemMock | mockDateItemRandom>

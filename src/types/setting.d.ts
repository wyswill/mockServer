import { Taps } from "./declares";


declare type mockDateItemMock = {
  path: string
  type: Taps.mock
  rule: any[] | string
  value: any
}
declare type mockDateItemRandom = {
  path: string
  type: Taps.random
  methodName: string
  value: any[]
}

declare type config = Array<mockDateItemMock | mockDateItemRandom>

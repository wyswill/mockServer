"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Taps;
(function (Taps) {
    Taps["random"] = "random";
    Taps["mock"] = "mock";
})(Taps = exports.Taps || (exports.Taps = {}));
var MethodNames;
(function (MethodNames) {
    MethodNames["boolean"] = "boolean";
    MethodNames["natural"] = "natural";
    MethodNames["integer"] = "integer";
    MethodNames["float"] = "float";
    MethodNames["character"] = "character";
    MethodNames["string"] = "string";
    MethodNames["range"] = "range";
    MethodNames["date"] = "date";
    MethodNames["time"] = "time";
    MethodNames["datetime"] = "datetime";
    MethodNames["now"] = "now";
    MethodNames["image"] = "image";
    MethodNames["dataImage"] = "dataImage";
    MethodNames["color"] = "color";
    MethodNames["paragraph"] = "paragraph";
    MethodNames["sentence"] = "sentence";
    MethodNames["word"] = "word";
    MethodNames["title"] = "title";
    MethodNames["cparagraph"] = "cparagraph";
    MethodNames["csentence"] = "csentence";
    MethodNames["cword"] = "cword";
    MethodNames["ctitle"] = "ctitle";
    MethodNames["first"] = "first";
    MethodNames["last"] = "last";
    MethodNames["name"] = "name";
    MethodNames["cfirst"] = "cfirst";
    MethodNames["clast"] = "clast";
    MethodNames["cname"] = "cname";
    MethodNames["url"] = "url";
    MethodNames["domain"] = "domain";
    MethodNames["email"] = "email";
    MethodNames["ip"] = "ip";
    MethodNames["tld"] = "tld";
    MethodNames["area"] = "area";
    MethodNames["region"] = "region";
    MethodNames["capitalize"] = "capitalize";
    MethodNames["upper"] = "upper";
    MethodNames["lower"] = "lower";
    MethodNames["pick"] = "pick";
    MethodNames["shuffle"] = "shuffle";
    MethodNames["guid"] = "guid";
    MethodNames["id"] = "id";
})(MethodNames = exports.MethodNames || (exports.MethodNames = {}));
/**
 * // 给定一个数据对象列表，例如
 [
   {"name":"jack","datatype":"string"},
   {"name":"crt","datatype":"datetime"},
   {"name":"upd","datatype":"datetime"},
   {"name":"age","datatype":"int"},
   {"name":"gender","datatype":"bool"},
 ]

 要求：
 1、创建一个页面，根据datatype的不同，加载不同数据组件，
 当datetype=string时，显示普通的文本输入框
 当datetype=datetime时，显示日期选择框
 当datetype=int时，显示数字输入框
 当datetype=bool时，显示单选框
 最终页面上要求输出5个组件，【输入框】【日期选择框】*2 【数字】【单选】

 2、在整个页面不允许出现v-if v-else v-show switch等等来实现,要求考虑扩展性(例如列表的数据可能达到30个)，推荐使用设计模式、构造器、模板、自定义封装等能显示出您开发水平的解决方案来实现（v-if ,v-else这样的解决方案90%的人都会，本题的重点是如何解决if else过多的试题）
 */
var data = [
    { "name": "jack", "datatype": "string" },
    { "name": "crt", "datatype": "datetime" },
    { "name": "upd", "datatype": "datetime" },
    { "name": "age", "datatype": "int" },
    { "name": "gender", "datatype": "bool" }
];
var pages = {
    string: function () {
        console.log("show string");
    },
    datetime: function () {
        console.log("show datetime");
    },
    int: function () {
        console.log("show int");
    },
    bool: function () {
        console.log("show bool");
    }
};
data.map(function (ele) {
    // @ts-ignore
    pages[ele.datatype]();
});

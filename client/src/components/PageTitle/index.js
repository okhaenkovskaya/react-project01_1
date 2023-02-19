"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importDefault(require("styled-components"));
var Title = styled_components_1["default"].h2(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    font-weight: 600;\n    font-size: 32px;\n    line-height: 39px;\n    letter-spacing: -0.02em;\n    color: #c1c6db;\n    margin: 0 0 10px;\n\n    &.small-title {\n        font-size: 16px;\n        line-height: 20px;\n    }\n"], ["\n    font-weight: 600;\n    font-size: 32px;\n    line-height: 39px;\n    letter-spacing: -0.02em;\n    color: #c1c6db;\n    margin: 0 0 10px;\n\n    &.small-title {\n        font-size: 16px;\n        line-height: 20px;\n    }\n"])));
var PageTitle = function (_a) {
    var children = _a.children, classes = _a.classes;
    return (0, jsx_runtime_1.jsxs)(Title, __assign({ className: classes }, { children: [children, " sd"] }));
};
exports["default"] = PageTitle;
var templateObject_1;

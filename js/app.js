"use strict";
;
// 新しい行を生成する関数
function MarkNowJSGenerateLine(linenumber, linesElement) {
    var _a;
    // 行数を追加するコード
    var newLine = document.createElement("div");
    newLine.textContent = linenumber;
    newLine.setAttribute("class", "mn-e-js-linenumber-div");
    (_a = document.querySelector(linesElement)) === null || _a === void 0 ? void 0 : _a.appendChild(newLine);
}
;
var MarkNowEditor = /** @class */ (function () {
    function MarkNowEditor(ec) {
        var ele = document.querySelector(ec.element);
        ele === null || ele === void 0 ? void 0 : ele.setAttribute("name", ec.name);
        // エディターが実際に生成される親要素を作成
        var editorElement = document.createElement("div");
        editorElement.setAttribute("class", "mn-e mn-e-js-" + ec.theme);
        editorElement.setAttribute("name", ec.name);
        ele === null || ele === void 0 ? void 0 : ele.appendChild(editorElement);
        // エディターエリアとなる要素を取得
        var GeneratededitorElement = document.querySelector(".mn-e[name=\"" + ec.name + "\"]");
        // エディターでコンテンツを制御する要素（input[type="hidden"]）を作成
        var resultInputField = document.createElement("input");
        resultInputField.setAttribute("type", "hidden");
        ele === null || ele === void 0 ? void 0 : ele.appendChild(resultInputField);
        // エディターでコンテンツを制御する要素を追加後、取得するコード
        var resultInputFieldElement = document.querySelector(ec.element + "[name=\"" + name + "\"] input[type=\"hidden\"]");
        // ラインを表示するエリアを生成するコード
        var linesArea = document.createElement("div");
        linesArea.setAttribute("class", "mn-e-lines-area");
        GeneratededitorElement === null || GeneratededitorElement === void 0 ? void 0 : GeneratededitorElement.appendChild(linesArea);
        console.log(".mn-e-lines-area");
        MarkNowJSGenerateLine("1", ec.element + " .mn-e-lines-area");
        var contentArea = document.createElement("div");
    }
    ;
    return MarkNowEditor;
}());
;

interface editorConfig {
    name: string,
    element: string,
    theme: string,
};
// 新しい行を生成する関数
function MarkNowJSGenerateLine(linenumber: string,linesElement: string) {
    // 行数を追加するコード
    let newLine = document.createElement("div");
    newLine.textContent = linenumber;
    newLine.setAttribute("class","mn-e-js-linenumber-div");
    document.querySelector(linesElement)?.appendChild(newLine);
};

class MarkNowEditor {
    constructor(ec: editorConfig) {
        const ele = document.querySelector(ec.element);
        ele?.setAttribute("name",ec.name);
        // エディターが実際に生成される親要素を作成
        let editorElement = document.createElement("div");
        editorElement.setAttribute("class",`mn-e mn-e-js-${ec.theme}`);
        editorElement.setAttribute("name",ec.name);
        ele?.appendChild(editorElement);
        // エディターエリアとなる要素を取得
        const GeneratededitorElement = document.querySelector(`.mn-e[name="${ec.name}"]`);
        // エディターでコンテンツを制御する要素（input[type="hidden"]）を作成
        let resultInputField = document.createElement("input");
        resultInputField.setAttribute("type","hidden");
        ele?.appendChild(resultInputField);
        // エディターでコンテンツを制御する要素を追加後、取得するコード
        let resultInputFieldElement = document.querySelector(`${ec.element}[name="${name}"] input[type="hidden"]`);
        // ラインを表示するエリアを生成するコード
        let linesArea = document.createElement("div");
        linesArea.setAttribute("class","mn-e-lines-area");
        GeneratededitorElement?.appendChild(linesArea);
        console.log(`.mn-e-lines-area`);
        MarkNowJSGenerateLine("1",`${ec.element} .mn-e-lines-area`);
        let contentArea = document.createElement("div");    
    };
};
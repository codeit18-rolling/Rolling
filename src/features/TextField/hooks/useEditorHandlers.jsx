import Quill from "quill";
import "react-quill/dist/quill.snow.css";
import "../TextFieldElements/editor.css";

export const useCreateEditor = (container, modules, { defaultValue }) => {
  const editorContainer = container.appendChild(
    container.ownerDocument.createElement("div")
  );

  const quill = new Quill(editorContainer, {
    theme: "snow",
    modules: modules,
    placeholder: "메세지를 입력하세요",
  });

  quill.format("font", "noto-sans");

  if (defaultValue) {
    quill.clipboard.dangerouslyPasteHTML(defaultValue);
  }

  return quill;
};

export const useQuillEvent = (quill) => {
  //font 초기화 이벤트
  quill.on("text-change", () => {
    const text = quill.getText().trim();

    if (text === "") {
      quill.format("font", "noto-sans");
      quill.setSelection(0, 0);

      const toolbar = document.querySelector(".ql-font");
      if (toolbar) {
        toolbar.childNodes[0].dataset.value = "noto-sans";
      }
    }

    onTextChangeRef.current?.();
  });

  //onBlur 이벤트, font속성 체크 이벤트
  quill.on("selection-change", (range, oldRange, source) => {
    onSelectionChangeRef.current?.(range, oldRange, source);

    if (!range && oldRange && onBlurRef.current) {
      onBlurRef.current();
    }
  });
};

export const useCleanUpHandler = (container, ref) => {
  ref.current = null;
  container.innerHTML = "";
};

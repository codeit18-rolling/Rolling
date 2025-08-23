import React, {
  forwardRef,
  useEffect,
  useLayoutEffect,
  useRef,
  useMemo,
} from "react";
import { Quill } from "react-quill";
import { toolbarOptions } from "./ToolBar";
import "react-quill/dist/quill.snow.css";
import "./editor.css";

/**
 * Editor 구조 페이지
 * @author <sejin5>
 */

const handlerAria = (toolbar) => {
  const labelMap = {
    bold: "굵게",
    italic: "기울임",
    underline: "밑줄",
    strike: "취소선",
    link: "링크",
    image: "이미지",
    list: "목록",
    bullet: "글머리표",
    check: "체크리스트",
    align: "정렬",
    color: "글자색",
    background: "배경색",
    header: "글씨크기",
    font: "글꼴",
  };

  toolbar.container.querySelectorAll("button, select").forEach((el) => {
    // 버튼
    if (el.tagName.toLowerCase() === "button") {
      const format = el.className.match(/ql-([a-z]+)/)?.[1];
      if (format && labelMap[format]) {
        el.setAttribute("aria-label", labelMap[format]);
      }
    }
    // select(글꼴, 색상 등)
    if (el.tagName.toLowerCase() === "select") {
      const format = el.className.match(/ql-([a-z]+)/)?.[1];
      if (format && labelMap[format]) {
        el.previousSibling.childNodes[0].setAttribute(
          "aria-label",
          labelMap[format]
        );
      }
    }
  });
};

const Editor = forwardRef(
  ({ defaultValue, onTextChange, onSelectionChange }, ref) => {
    const containerRef = useRef(null);
    const onTextChangeRef = useRef(onTextChange);
    const onSelectionChangeRef = useRef(onSelectionChange);
    const modules = useMemo(() => {
      return {
        toolbar: toolbarOptions,
      };
    });

    useLayoutEffect(() => {
      onTextChangeRef.current = onTextChange;
      onSelectionChangeRef.current = onSelectionChange;
    });

    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;

      const editorContainer = container.appendChild(
        container.ownerDocument.createElement("div")
      );
      const quill = new Quill(editorContainer, {
        theme: "snow",
        modules: modules,
        placeholder: "메세지를 입력하세요",
      });

      quill.format("font", "noto-sans");

      handlerAria(quill.getModule("toolbar"));

      ref.current = quill;

      if (defaultValue) {
        quill.clipboard.dangerouslyPasteHTML(defaultValue);
      }

      quill.on("text-change", () => {
        const text = quill.getText().trim();
        if (text === "") {
          quill.format("font", "noto-sans");

          const toolbar = document.querySelector(".ql-font");

          if (toolbar) {
            toolbar.childNodes[0].dataset.value = "noto-sans";
          }
        }

        onTextChangeRef.current?.();
      });

      quill.on("selection-change", (range, oldRange, source) => {
        onSelectionChangeRef.current?.(range, oldRange, source);

        if (range) {
          quill.root.removeAttribute("data-placeholder");
        } else {
          if (quill.getText().trim() === "") {
            quill.root.setAttribute("data-placeholder", "메세지를 입력하세요");
          }
        }
      });

      setTimeout(() => quill.blur(), 0);

      return () => {
        ref.current = null;
        container.innerHTML = "";
      };
    }, []);

    return (
      <div
        ref={containerRef}
        className="w-full min-w-[320px] h-[260px] m-auto tablet:w-[720px]"
      ></div>
    );
  }
);

Editor.displayName = "Editor";

export default Editor;

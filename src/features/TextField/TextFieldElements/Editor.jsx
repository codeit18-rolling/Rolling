import React, { forwardRef, useEffect, useLayoutEffect, useRef } from "react";
import ReactQuill, { Quill } from "react-quill";
import { toolbarOptions } from "./ToolBar";
import "react-quill/dist/quill.snow.css";
import "./editor.css";

/**
 * Editor 구조 페이지
 * @author <sejin5>
 */

const Editor = forwardRef(
  ({ defaultValue, onTextChange, onSelectionChange, onBlur }, ref) => {
    const containerRef = useRef(null);
    const onTextChangeRef = useRef(onTextChange);
    const onSelectionChangeRef = useRef(onSelectionChange);
    const onBlurRef = useRef(onBlur);

    useLayoutEffect(() => {
      onTextChangeRef.current = onTextChange;
      onBlurRef.current = onBlur;
    });

    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;

      const editorContainer = container.appendChild(
        container.ownerDocument.createElement("div")
      );
      const quill = new Quill(editorContainer, {
        theme: "snow",
        modules: {
          toolbar: toolbarOptions,
        },
        placeholder: "메세지를 입력하세요",
      });

      quill.format("font", "noto-sans");

      ref.current = quill;

      if (defaultValue) {
        quill.clipboard.dangerouslyPasteHTML(defaultValue);
      }

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

      quill.on("selection-change", (range, oldRange, source) => {
        onSelectionChangeRef.current?.(range, oldRange, source);

        // range가 null이면 에디터에서 포커스가 벗어난 것 (blur)
        if (!range && oldRange && onBlurRef.current) {
          onBlurRef.current();
        }
      });

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

import React, { forwardRef, useEffect, useRef } from "react";
import { Quill } from "react-quill";
import { toolbarOptions } from "./ToolBar";
import "react-quill/dist/quill.snow.css";
import "./editor.css";

/**
 * Editor 구조 페이지
 * @author <sejin5>
 */

const Editor = forwardRef(({ defaultValue }, ref) => {
  const containerRef = useRef(null);
  const defaultValueRef = useRef(defaultValue);

  useEffect(() => {
    const container = containerRef.current;
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

    ref.current = quill;

    if (defaultValueRef.current) {
      quill.setContents(defaultValueRef.current);
    }

    return () => {
      ref.current = null;
      container.innerHTML = "";
    };
  }, [ref]);

  return <div ref={containerRef} className="w-[720px] h-[260px] m-auto"></div>;
});

Editor.displayName = "Editor";

export default Editor;

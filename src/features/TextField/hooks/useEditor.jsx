import { useEffect, useRef, useMemo } from "react";
import { toolbarOptions } from "../TextFieldElements/ToolBar";
import {
  useCreateEditor,
  useQuillEvent,
  useCleanUpHandler,
} from "./useEditorHandlers";
import "react-quill/dist/quill.snow.css";
import "../TextFieldElements/editor.css";

export const useEditor = ({
  defaultValue,
  onTextChange,
  onSelectionChange,
  onBlur,
}) => {
  const containerRef = useRef(null);
  const quillRef = useRef(null);
  const modules = useMemo(() => {
    return {
      toolbar: toolbarOptions,
    };
  });

  const onTextChangeRef = useRef(onTextChange);
  const onSelectionChangeRef = useRef(onSelectionChange);
  const onBlurRef = useRef(onBlur);

  useEffect(() => {
    onTextChangeRef.current = onTextChange;
    onSelectionChangeRef.current = onSelectionChange;
    onBlurRef.current = onBlur;
  }, [onTextChange, onSelectionChange, onBlur]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    //editor 생성
    const quill = useCreateEditor(container, modules, { defaultValue });
    quillRef.current = quill;

    // 이벤트 등록
    useQuillEvent(quill);

    return () => useCleanUpHandler(container, quillRef);
  }, [defaultValue]);

  return { containerRef, quillRef };
};

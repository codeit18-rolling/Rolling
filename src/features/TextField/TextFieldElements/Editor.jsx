import React, { forwardRef } from "react";
import { useEditor } from "../hooks/useEditor";

/**
 * Editor 구조 페이지
 * @author <sejin5>
 */

const Editor = forwardRef(
  ({ defaultValue, onTextChange, onSelectionChange, onBlur }, ref) => {
    const { containerRef } = useEditor({
      defaultValue,
      onTextChange,
      onSelectionChange,
      onBlur,
    });

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

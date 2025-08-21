import { useState, useEffect } from "react";

const Theme = () => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (prefersDark) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);
  useEffect(() => {
    const html = document.documentElement; // <html> 선택
    if (isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button className="border-2" onClick={() => setIsDark((prev) => !prev)}>
      {isDark ? "다크 모드" : "라이트 모드"}
    </button>
  );
};

export default Theme;

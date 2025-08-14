import { useEffect, useState } from "react";

const getMatches = (query) => {
  return window.matchMedia(query).matches;
};

/**
 * mediaQuery에 반응하여 데이터를 반환한다.
 */
export default function useMediaQuery(query) {
  /**
   * 반환할 데이터를 담아둘 state
   */
  const [isMatch, setIsMatch] = useState(() => getMatches(query));

  const handleChange = (e) => {
    setIsMatch(e.matches);
  };

  useEffect(() => {
    const media = window.matchMedia(query);
    media.addEventListener("change", handleChange);

    return () => {
      media.removeEventListener("change", handleChange);
    };
  }, [query]);

  return isMatch;
}

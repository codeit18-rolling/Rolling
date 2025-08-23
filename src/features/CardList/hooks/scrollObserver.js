import { useEffect } from "react";

export default function scrollObserver({
  observerTarget,
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
}) {
  useEffect(() => {
    const target = observerTarget.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(target);
    return () => observer.unobserve(target);
  }, [observerTarget, fetchNextPage, hasNextPage, isFetchingNextPage]);
}

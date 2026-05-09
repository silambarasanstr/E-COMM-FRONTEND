import { useEffect, useRef } from "react";

const InfiniteScroll = ({ loadMore, hasMore, loading }) => {
  const observerRef = useRef(null);

  useEffect(() => {
    if (loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMore();
        }
      },
      { threshold: 1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [loading, hasMore, loadMore]);

  return (
    <div ref={observerRef} className="py-4 text-center">
      {loading && <p>Loading more...</p>}
      {!hasMore && <p>No more data</p>}
    </div>
  );
};

export default InfiniteScroll;
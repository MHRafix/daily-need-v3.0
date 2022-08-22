import { useEffect, useState } from "react";

export default function ProductPagination(items) {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + 9;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / 9));
  }, [itemOffset, items.length]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * 9) % items.length;

    setItemOffset(newOffset);
  };

  return { handlePageClick, pageCount, currentItems };
}

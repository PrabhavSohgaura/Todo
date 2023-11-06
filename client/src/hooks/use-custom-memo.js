import React, { useRef } from "react";

const useCustomMemo = (cb, dependency) => {
  //variables or state to save the cached value
  const memosizedRef = useRef();
  //check the dependency change
  if (!memosizedRef.current || dependency) {
    memosizedRef.current = {
      value: cb(),
      dependency,
    };
  }
  //cleanup

  //retrurn the memoized value
  return <div>use-custom-memo</div>;
};

export default useCustomMemo;

"use client";

import { useLayoutEffect, useState } from "react";

export default function Component(props) {
  const [metadata, update] = useState({});

  useLayoutEffect(() => {
    const description = document.querySelector("head meta[name='description']");

    if (description) {
      update(JSON.parse(description.getAttribute("content")));
    }
  }, []);

  return (
    <>
      <h1>searchParams</h1>
      <h2>type:</h2>
      <code>
        <pre>{JSON.stringify(metadata.type, null, 2)}</pre>
      </code>
      <h2>content:</h2>
      <code>
        <pre>{JSON.stringify(metadata.searchParams, null, 2)}</pre>
      </code>
    </>
  );
}

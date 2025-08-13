// "use client";

import React, { use } from "react";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  // Unwrap params using React.use() as required by Next.js 15
  const { id } = use(params);
  return (
    <div>
      <p>user id: {id}</p>
    </div>
  );
}

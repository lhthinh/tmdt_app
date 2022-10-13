import React from "react";
import { useSelector } from "react-redux";
export default function Home2Content() {
  const count = useSelector((state) => state.counter.value);
  return <div>you click {count} time</div>;
}

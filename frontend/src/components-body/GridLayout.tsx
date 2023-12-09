import CreationCard from "./CreationCard.tsx";
import RightCard from "./RightCard.tsx";
import LeftCard from "./LeftCard.tsx";
import "../styles/components-header.css";
import { useEffect } from "react";
import FeedCard from "./FeedCard.tsx";

export default function GridLayout() {
  useEffect(() => {
    const use = async () => {
      (await import("tw-elements" as any)).default;
    };
    use();
  }, []);
  return (
    <div className="flex justify-center items-center mt-8 grid-cols-4">
      <div className="grid gap-6 mx-auto grid-flow-col w-full max-w-screen-xl">
        <div className="col-span-1">
          <LeftCard></LeftCard>
        </div>
        <div className="col-span-2">
          <div>
            <CreationCard></CreationCard>
            <FeedCard></FeedCard>
          </div>
        </div>
        <div className="col-span-1">
          <RightCard></RightCard>
        </div>
      </div>
    </div>
  );
}

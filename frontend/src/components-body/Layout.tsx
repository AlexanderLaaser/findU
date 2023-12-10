import CreationCard from "./CreationCard.tsx";
import RightCard from "./RightCard.tsx";
import LeftCard from "./LeftCard.tsx";
import "../styles/components-header.css";
import FeedCard from "./FeedCard.tsx";

export default function Layout() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-start gap-6 mt-6 ">
        <div className="w-1/4 min-w-[200px]">
          <LeftCard></LeftCard>
        </div>
        <div className="w-1/2 min-w-[400px]">
          <div className="">
            <CreationCard></CreationCard>
            <FeedCard></FeedCard>
          </div>
        </div>
        <div className="w-1/4 min-w-[200px]">
          <RightCard></RightCard>
        </div>
      </div>
    </div>
  );
}

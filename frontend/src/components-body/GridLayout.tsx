import CreationCard from "./CreationCard.tsx";
import RightCard from "./RightCard.tsx";
import LeftCard from "./LeftCard.tsx";
import "../styles/components-header.css";

export default function GridLayout() {
  return (
    <div className="flex justify-center items-center mt-6">
      <div className="grid gap-4 mx-auto grid-flow-col w-full max-w-screen-xl">
        <div>
          <LeftCard></LeftCard>
        </div>
        <div className="col-span-1">
          <CreationCard></CreationCard>
        </div>
        <div>
          <RightCard></RightCard>
        </div>
      </div>
    </div>
  );
}

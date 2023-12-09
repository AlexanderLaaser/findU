import CreationModal from "./CreationModal";

function CreationCard() {
  return (
    <div className="flex flex-col items-center justify-center bg-white h-40 shadow-md rounded-lg w-full">
      Start your adventure ...
      <CreationModal></CreationModal>
    </div>
  );
}

export default CreationCard;

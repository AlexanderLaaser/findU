function FeedCard() {
  return (
    <div className="lg:flex mt-6 shadow-md rounded-lg ">
      <div
        className="h-48 lg:h-autmo flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center "
        title="Picture"
      ></div>
      <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">Title</div>
          <p className="text-gray-700 text-base">Description</p>
        </div>
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src="/img/jonathan.jpg"
            alt="Avatar of Jonathan Reinink"
          ></img>
          <div className="text-sm">
            <p className="text-gray-900 leading-none">Jonathan Reinink</p>
            <p className="text-gray-600">Aug 18</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedCard;

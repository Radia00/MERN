const NewsLetter = (props) => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto">
        <div className="grid justify-center items-center">
          <div className="grid-cols-6">
            <span className="text-xl text-green-500 text-center block mb-6">
              {props.newsletter.subtitle}
            </span>
            <h1 className="text-3xl font-bold text-black sm:max-w-lg capitalize text-center mb-2">
              {props.newsletter.title}
            </h1>
            <p className="text-slate-600 mb-10">
              {props.newsletter.description}
            </p>
            <div className="flex p-1 gap-1 rounded-lg border border-slate-500">
              <input
                type="text"
                className="bg-transparent w-full"
                placeholder="Enter your email"
              />
              <button className="p-3 bg-red-500 text-white rounded-lg">Subscribe</button>
            </div>
            {/* <input
            type="text"
            className="p-3 rounded-lg"
            placeholder="Enter your email"
          /> */}
          </div>
        </div>
        {/* <div className="grid grid-cols-2 justify-between items-center gap-8">
          <input
            type="text"
            className="p-3 rounded-lg"
            placeholder="Enter your email"
          />
          <button className="text-black">Subscribe</button>
        </div> */}
      </div>
    </div>
  );
};

export default NewsLetter;

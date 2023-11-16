const FeatureMultiplePost = (props) => {
  return (
    <div className="grid grid-cols-2 gap-6  ">
      {props.featuredProject.posts.map((item, index) => {
        return (
          <div key={index}>
            <div className="mb-10">
              <img src={item.image} className="rounded-3xl w-full" alt="" />
            </div>
            <p className="text-black">{item.category} {item.date}</p>
            <h1 className="text-xl font-bold text-black mb-2">{item.title}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default FeatureMultiplePost;

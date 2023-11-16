const FeatureSinglePost = (props) => {
  //   console.log(props);
  return (
    <div>
      {
        <div className="w-full h-full">
          <div className="mb-10">
            <img
              src={props.featuredProject.singlePost.image}
              className="rounded-3xl w-full"
              alt=""
            />
          </div>
          <p className="text-black">
            {props.featuredProject.singlePost.category}{" "}
            {props.featuredProject.singlePost.date}
          </p>
          <h1 className="text-xl font-bold text-black mb-2">
            {props.featuredProject.singlePost.title}
          </h1>
        </div>
      }
    </div>
  );
};

export default FeatureSinglePost;

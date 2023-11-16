const Hero = (props) => {
//   console.log(props);
  return (
    <div className=" bg-green-200">
      <div className="container mx-auto py-20">
        <div className="flex justify-between items-center">
          <div className="w-1/3">
            <h1 className="text-5xl font-bold text-black">{props.hero.title}</h1>
            <p className="py-6 text-black">{props.hero.description}</p>
            <button className="btn btn-primary bg-green-500 border-none">
              {props.hero.button}
            </button>
          </div>
          <div className="w-1/2">
            <div className="flex items-center gap-6 flex-wrap">
              {props.hero.images.map((item, index) => {
                return <img key={index} src={item} className="rounded-lg" alt="" />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

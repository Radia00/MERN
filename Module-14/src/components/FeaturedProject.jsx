import FeatureMultiplePost from "./FeatureMultiplePost";
import FeatureSinglePost from "./FeatureSinglePost";

const FeaturedProject = (props) => {
  // console.log(props);
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto">
        <div className="grid gap-4 mb-20">
          <span className="text-xl text-green-500">
            {props.featuredProject.subtitle}
          </span>
          <h1 className="text-3xl font-bold text-black sm:max-w-lg">
            {props.featuredProject.title}
          </h1>
        </div>
        <div className="grid grid-cols-2 justify-between items-center gap-8">
        <FeatureSinglePost className="w-1/2" featuredProject={props.featuredProject} />
        <FeatureMultiplePost className="w-1/2" featuredProject={props.featuredProject} />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;

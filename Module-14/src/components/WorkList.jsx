import WorkCard from "./WorkCard";

const WorkList = (props) => {
  // console.log(props);
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto">
        <div className="grid gap-4 mb-10">
          <span className="text-xl text-green-500">
            {props.workList.subtitle}
          </span>
          <h1 className="text-3xl font-bold text-black sm:max-w-lg">
            {props.workList.title}
          </h1>
        </div>
        <WorkCard workList={props.workList.cards} />
      </div>
    </div>
  );
};

export default WorkList;

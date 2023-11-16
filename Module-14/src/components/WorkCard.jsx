const WorkCard = (props) => {
  // console.log(props);
  return (
    <div className="flex gap-10 justify-between items-center">
      {props.workList.map((item, index) => {
        return (
          <div key={index} className="p-12">
            <div className="grid gap-4 mb-10">
              <div className="bg-green-200 w-16 h-16 rounded-md inline-flex justify-center items-center">
                <img src={item.icon} alt="" />
              </div>
              <h1 className="text-xl font-bold text-black">{item.title}</h1>
              <p className="text-black">{item.description}</p>
            </div>
            <button className="text-black">{item.btn}</button>
          </div>
        );
      })}
    </div>
  );
};

export default WorkCard;

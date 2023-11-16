import CountUp from "react-countup";
const Counter = (props) => {
  return (
    <div className="bg-white py-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center gap-10">
          {props.Counter.map((item, index) => {
            return (
              <div key={index} className="text-center w-full h-full p-10 shadow-lg rounded-3xl">
                <div className="w-20 h-20 rounded-lg bg-green-200 inline-flex justify-center items-center mb-10">
                  <img src={item.icon} alt="" />
                </div>
                <h1 className="text-3xl font-bold text-black mb-2">
                  <CountUp start={0} end={item.number} duration={5} />
                </h1>
                <p className="text-black">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Counter;

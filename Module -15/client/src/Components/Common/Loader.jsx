const Loader = () => {
    return (
      <div>
        <div className="loader absolute top-0 left-0 right-0 bottom-0 bg-indigo-900 min-h-screen">
          <div className="loader-inner flex items-center justify-center min-h-screen">
            <button
              type="button"
              className="bg-indigo-500 p-5 rounded-xl flex items-center justify-center"
              disabled
            >
              <span className="animate-spin h-10 w-10 rounded-lg mr-3 bg-white"></span>
              Processing...
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Loader;
  
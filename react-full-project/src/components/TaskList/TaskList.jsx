import React from "react";

const TaskList = ({data}) => {
  return (
    <div
      id="tasklist"
      className="flex overflow-x-auto items-center justify-start gap-5 flex-nowrap h-[55%] w-full py-5 mt-10"
    >
      <div className="flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl">
        <div className="flex justify-between items-center p-5">
          <h3 className="bg-red-600 px-3 py-1 rounded text-sm">High</h3>
          <h4 className="text">20 feb 2024</h4>
        </div>
      </div>

      {/* <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl'>

        </div>
        <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl'>

        </div>
        <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl'>

        </div>
        <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl'>

        </div>
        <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl'>

        </div>
        <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl'>

        </div>
        <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl'>

        </div> */}
    </div>
  );
};

export default TaskList;

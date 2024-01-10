import React from "react";

const HeaderTable = () => {
  return (
    <div className="overflow-x-auto justify-center">
      <table className="table">
        {/* head */}
        <thead className="text-lg">
          <tr>
            <th></th>
            <th className="inline-flex bg-slate- ml-28">Id</th>
            <th className="inline-flex ml-16">Name</th>
            <th className="inline-flex ml-80">Action</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default HeaderTable;

import React from "react";

const SimpleTable = ({ tableHeads, tableFieldNames, data, open }) => {
  const showData = () => {
    let a = [];
    data?.map((val) => {
      a = tableFieldNames?.map((value, index) => {
        return (
          <tr key={index}>
            <td>{tableHeads[index]}</td>
            <td>
              {val[value]}{" "}
              {val[value] === true
                ? "true"
                : val[value] === false
                ? "false"
                : ""}{" "}
            </td>
          </tr>
        );
      });
    });
    a.push(
      <tr>
        <td></td>
        <td>
          <button
            onClick={() => {
              open(true);
            }}
          >
            {" "}
            Edit{" "}
          </button>
        </td>
      </tr>
    );
    return a;
  };

  return (
    <div>
      <table>{showData()}</table>
    </div>
  );
};

export default SimpleTable;

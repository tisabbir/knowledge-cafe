import PropTypes from "prop-types";

const SpentTime = ({ times }) => {
  return (
    <div className=" bg-purple-200 p-4 mb-4 rounded-xl text-purple-900 font-bold border-2 border-solid border-purple-900">
      <h1>Spent Time on Read : {times} minutes</h1>
    </div>
  );
};

SpentTime.propTypes = {
  times: PropTypes.number,
};

export default SpentTime;

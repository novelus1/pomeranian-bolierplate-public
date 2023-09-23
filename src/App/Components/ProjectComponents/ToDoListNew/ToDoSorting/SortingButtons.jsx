import './SortingButtons.css'

function SortingButtons({
  sortDate,
  selectedShowStatus,
  handleSortDateChange,
  handleShowStatusChange,
}) {
  return (
    <div className="todo__sorting-buttons">
      <button
        onClick={() =>
          handleSortDateChange(sortDate === 'newest' ? 'oldest' : 'newest')
        }
      >
        {sortDate === 'newest' ? 'Sort by Oldest' : 'Sort by Newest'}
      </button>
      <select
        value={selectedShowStatus}
        onChange={(e) => handleShowStatusChange(e.target.value)}
      >
        <option value="all">Show All</option>
        <option value="completed">Show Completed</option>
        <option value="uncompleted">Show Uncompleted</option>
      </select>
    </div>
  );
}

export default SortingButtons;

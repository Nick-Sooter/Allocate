import React from 'react';
import 'boxicons';
import { default as api } from '../store/apiSlice.js';

function List() {
  const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery();
  const [deleteTransaction] = api.useDeleteTransactionMutation();
  let Transactions;

  const handleClick = (e) => {
    //console.log(e.target.dataset.id)
    if (!e.target.dataset.id) return 0;
    deleteTransaction({ _id: e.target.dataset.id })
  }

  if (isFetching) {
    Transactions = <div>Fetching</div>
  } else if (isSuccess) {
    Transactions = data.map((val, i) => <Transaction key={i} category={val} handle={handleClick} />)
  } else if (isError) {
    Transactions = <div>Error</div>
  }

  return (
    <div className="flex flex-col py-6 gap-3">
      <h1 className="py-4 font-bold text-xl">History</h1>
      {Transactions}
    </div>
  )
}

function Transaction({ category, handle }) {
  if (!category) return null;
  return (
    <div className="item flex justify-left bg-gray-50 py-2 rounded-r" style={{ borderRight: `8px solid ${category.color ?? "rgb(229, 229, 229)"}` }}>
      <button className="px-3" onClick={handle}><box-icon data-id={category._id ?? ""} color={category.color ?? "rgb(229, 229, 229)"} size="sm" pull="left" name="trash"></box-icon></button>
      <span className="block-w-full">{category.name ?? ""}</span>
    </div>
  )
}

export default List;

import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { default as api } from '../store/apiSlice.js';

function List() {
  const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery();

  let Transactions;

  if (isFetching) {
    Transactions = <div>Fetching</div>
  } else if (isSuccess) {
    Transactions = data.map((val, i) => <Transaction key={i} category={val} />)
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

function Transaction({ category }) {
  if (!category) return null;
  return (
    <div className="item flex justify-center bg-gray-50 py-2 rounded-r" style={{ borderRight: `8px solid ${category.color ?? "rgb(229, 229, 229)"}` }}>
      <button className="px-3"><DeleteIcon fontSize="xs" /></button>
      <span className="block-w-full">{category.name ?? ""}</span>
    </div>
  )
}

export default List;
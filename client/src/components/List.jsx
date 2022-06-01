import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const categories = [
  {
    name: 'Savings',
    color: 'rgb(255, 205, 86)',
  },
  {
    name: 'Investment',
    color: 'rgb(54, 162, 235)',
  },
  {
    name: 'Expense',
    color: 'rgb(255, 99, 132)',
  }
]


function List() {
  return (
    <div className="flex flex-col py-6 gap-3">
      <h1 className="py-4 font-bold text-xl">History</h1>
      {categories.map((val, i) => <Transaction key={i} category={val} />)}
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
import React from 'react';
import { default as api } from '../store/apiSlice.js';
import { getLabels } from '../helpers/helper.js';

function Labels() {
  //console.log(api.useGetCategoriesQuery())
  const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery();
  // console.log(data); console.log(isFetching), etc
  let Transactions;

  if (isFetching) {
    Transactions = <div>Fetching</div>
  } else if (isSuccess) {
    Transactions = getLabels(data, 'type').map((val, i) => <LabelComponent key={i} data={val} />)
  } else if (isError) {
    Transactions = <div>Error</div>
  }

  return (
    <>
      {Transactions}
    </>
  )
}

function LabelComponent({ data }) {
  if (!data) return <></>;
  return (
    <div className="labels flex justify-between">
      <div className="flex gap-2">
        <div className="w-2 h-2 rounded py-3" style={{ background: data.color ?? "rgb(255, 205, 86)" }}></div>
        <h3 className="text-md">{data.type ?? ""}</h3>
      </div>
      <h3 className="font-bold">{Math.round(data.percent) ?? 0}%</h3>
    </div >
  )
}

export default Labels;
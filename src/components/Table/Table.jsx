import React, { useState } from 'react';

const Table = (props) => {
  const initDataShow =
    props.limit && props.bodyData
      ? props.bodyData.slice(0, Number(props.limit))
      : props.bodyData;

  const [dataShow, setDataShow] = useState(initDataShow);

  let pages = 1;

  let range = [];

  if (props.limit !== undefined) {
    let page = Math.floor(props.bodyData.length / Number(props.limit));
    pages = props.bodyData.length % Number(props.limit) === 0 ? page : page + 1;
    range = [...Array(pages).keys()];
  }

  const [currPage, setCurrPage] = useState(0);

  const selectPage = (page) => {
    const start = Number(props.limit) * page;
    const end = start + Number(props.limit);

    setDataShow(props.bodyData.slice(start, end));

    setCurrPage(page);
  };

  return (
    <div>
      <div className='overflow-y-auto'>
        <table className='w-full'>
          {props.headData && props.renderHead ? (
            <thead className='bg-second-bg dark:bg-second-bg-dark'>
              <tr className='text-left'>
                {props.headData.map((item, index) =>
                  props.renderHead(item, index)
                )}
              </tr>
            </thead>
          ) : (
            ''
          )}
          {props.bodyData && props.renderBody ? (
            <tbody>
              {dataShow.map((item, index) => props.renderBody(item, index))}
            </tbody>
          ) : (
            ''
          )}
        </table>
      </div>
      {pages > 1 ? (
        <div className='flex w-full justify-end items-center mt-5'>
          {range.map((item, index) => (
            <div
              key={index}
              className={`ml-[10px] shadow-main dark:shadow-box-shadow-dark justify-center w-[30px] h-[30px] rounded-full flex items-center cursor-pointer hover:bg-second-color hover:text-white ${
                currPage === index ? 'pagination_active' : ''
              }`}
              onClick={() => selectPage(index)}
            >
              {item + 1}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Table;

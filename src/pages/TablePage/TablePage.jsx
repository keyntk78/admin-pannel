import React from 'react';
import Table from '../../components/Table/Table';
import customerList from '../../assets/JsonData/customers-list.json';
import { Link } from 'react-router-dom';

const customerTableHead = [
  '',
  'name',
  'email',
  'phone',
  'total orders',
  'total spend',
  'location',
];

const renderHead = (item, index) => (
  <th className='capitalize px-[10px] py-[15px]' key={index}>
    {item}
  </th>
);

const renderBody = (item, index) => (
  <tr className='text-left hover:bg-main-color hover:text-white' key={index}>
    <td className='capitalize px-[10px] py-[15px] '>{item.id}</td>
    <td className='capitalize px-[10px] py-[15px] '>{item.name}</td>
    <td className='capitalize px-[10px] py-[15px] '>{item.email}</td>
    <td className='capitalize px-[10px] py-[15px] '>{item.phone}</td>
    <td className='capitalize px-[10px] py-[15px] '>{item.total_orders}</td>
    <td className='capitalize px-[10px] py-[15px] '>{item.total_spend}</td>
    <td className='capitalize px-[10px] py-[15px] '>{item.location}</td>
  </tr>
);

const TablePage = () => {
  return (
    <section>
      <div className='px-[30px] py-[10px] bg-main-bg dark:bg-main-bg-dark dark:shadow-box-shadow-dark shadow-main rounded-[15px] h-full mb-[30px] flex items-center justify-between'>
        <div>
          <h2 className='capitalize font-semibold text-[20px] pb'>
            Hi, welcome back!
          </h2>
          <span className='text-sm'>Your business dashboard template</span>
        </div>
        <div className=''>
          <ol className='flex items-center justify-center gap-2 text-[14px]'>
            <li className=''>
              <Link to='/'>Dashboard</Link>
            </li>
            <li>
              <i className='fa-solid fa-chevron-right'></i>
            </li>
            <li className='text-blue-300'>
              <Link to='/table'>Table</Link>
            </li>
          </ol>
        </div>
      </div>
      <div className='grid grid-cols-12'>
        <div className='col-span-12'>
          <div className='px-[30px] py-[30px] bg-main-bg dark:bg-main-bg-dark dark:shadow-box-shadow-dark shadow-main rounded-[15px] h-full'>
            <div className='px-5 py-5'>
              <Table
                limit='10'
                headData={customerTableHead}
                renderHead={(item, index) => renderHead(item, index)}
                bodyData={customerList}
                renderBody={(item, index) => renderBody(item, index)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TablePage;

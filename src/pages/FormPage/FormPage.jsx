import React from 'react';
import { Link } from 'react-router-dom';

const FormPage = () => {
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
              <Link to='/form'>Form</Link>
            </li>
          </ol>
        </div>
      </div>
      <div className='grid grid-cols-12'>
        <div className='col-span-12'>
          <div className='px-[30px] py-[30px] bg-main-bg dark:bg-main-bg-dark dark:shadow-box-shadow-dark shadow-main rounded-[15px] h-full'>
            <h3 className='text-[16px] font-semibold'>Form Full Width</h3>
            <div className='mt-4'>
              <form>
                <div className='grid grid-cols-2 gap-10 mb-5'>
                  <div className='col-span-1 grid grid-rows-2 '>
                    <label className='row-span-1 flex items-center'>
                      First Name*
                    </label>
                    <input
                      type='text'
                      placeholder='first name'
                      className='row-span-1 py-2 px-4 focus:outline-none border rounded-md dark:border-gray-500 dark:bg-main-bg-dark'
                    />
                  </div>
                  <div className='col-span-1 grid grid-rows-2'>
                    <label className='row-span-1 flex items-center'>
                      Last Name*
                    </label>
                    <input
                      type='text'
                      placeholder='last name'
                      className='row-span-1 py-2 px-4 focus:outline-none border rounded-md dark:border-gray-500 dark:bg-main-bg-dark'
                    />
                  </div>
                </div>

                <div className='grid grid-rows-3 mb-5'>
                  <label className='row-span-1 flex items-center'>
                    Email Address*
                  </label>
                  <input
                    type='text'
                    placeholder='Email Address'
                    className='row-span-1 py-2 px-4 focus:outline-none border dark:border-gray-500 rounded-md dark:bg-main-bg-dark'
                  />
                  <span className='text-red-500 mt-2 text-sm'>
                    Email is required.
                  </span>
                </div>

                <div className='mb-5 grid grid-rows-2 gap-2'>
                  <label className='row-span-1 flex items-center'>Gender</label>
                  <div className='row-span-1'>
                    <input
                      type='radio'
                      className='mr-2'
                      id='gender'
                      name='gender'
                      checked
                    />
                    Male
                    <input
                      type='radio'
                      id='gender'
                      className='ml-4 mr-2'
                      name='gender'
                    />
                    Female
                  </div>
                </div>

                <div className='grid grid-cols-2 gap-10 mb-5'>
                  <div className='col-span-1 grid grid-rows-2 '>
                    <label className='row-span-1 flex items-center'>
                      BirdDay
                    </label>
                    <input
                      type='date'
                      className='row-span-1 py-2 px-4 focus:outline-none border rounded-md dark:border-gray-500 dark:bg-main-bg-dark'
                    />
                  </div>
                </div>

                <div className='grid grid-rows-2 mb-5'>
                  <label className='row-span-1 flex items-center'>
                    Phone Number*
                  </label>
                  <input
                    type='text'
                    placeholder='(+84) 355 882 728'
                    className='row-span-1 py-2 px-4 focus:outline-none border rounded-md dark:border-gray-500 dark:bg-main-bg-dark'
                  />
                </div>

                <div className='grid grid-rows-2 mb-8'>
                  <label className='row-span-1 flex items-center'>
                    Address
                  </label>
                  <div className='row-span-1 grid grid-cols-8 gap-8 '>
                    <div className='col-span-4'>
                      <input
                        type='text'
                        placeholder='City'
                        className='row-span-1 py-2 px-4 focus:outline-none w-full border rounded-md dark:border-gray-500 dark:bg-main-bg-dark'
                      />
                    </div>
                    <div className='col-span-2'>
                      <select
                        placeholder='State'
                        defaultValue='s'
                        className=' px-4 py-2.5 w-full border rounded-md dark:border-gray-500 dark:bg-main-bg-dark'
                      >
                        <option value='a' disabled selected>
                          State
                        </option>
                        <option value='A'>Phú Yên</option>
                        <option value='B'>Khánh Hòa</option>
                        <option value='C'>Hà Nội</option>
                      </select>
                    </div>
                    <div className='col-span-2'>
                      <input
                        type='text'
                        placeholder='Zip'
                        className='row-span-1 py-2 px-4 focus:outline-none w-full border rounded-md dark:border-gray-500 dark:bg-main-bg-dark'
                      />
                    </div>
                  </div>
                </div>

                <div className='mb-5 grid-rows-2 gap-4'>
                  <label className='row-span-1 flex items-center mb-4'>
                    Description
                  </label>
                  <textarea
                    name=''
                    id=''
                    className='row-span-1 w-full py-2 px-4 focus:outline-none border rounded-md dark:border-gray-500 dark:bg-main-bg-dark '
                    rows='10'
                  ></textarea>
                </div>

                <div className='mb-8'>
                  <input type='checkbox' className='' />{' '}
                  <span className='ml-2'>is Admin</span>
                </div>

                <div className='flex justify-start gap-4'>
                  <button className='bg-main-color text-white py-2 px-4 rounded-[10px]'>
                    Submit
                  </button>
                  <button className='bg-second-color text-white   py-2 px-4 rounded-[10px]'>
                    Clear
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormPage;

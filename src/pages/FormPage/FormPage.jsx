import React from 'react'
import { Link } from 'react-router-dom'

const FormPage = () => {
  return (
    <section>
      <div className='mb-[30px] flex h-full items-center justify-between rounded-[15px] bg-main-bg px-[30px] py-[10px] shadow-main dark:bg-main-bg-dark dark:shadow-box-shadow-dark'>
        <div>
          <h2 className='pb text-[20px] font-semibold capitalize'>Hi, welcome back!</h2>
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
          <div className='h-full rounded-[15px] bg-main-bg px-[30px] py-[30px] shadow-main dark:bg-main-bg-dark dark:shadow-box-shadow-dark'>
            <h3 className='text-[16px] font-semibold'>Form Full Width</h3>
            <div className='mt-4'>
              <form>
                <div className='mb-5 grid grid-cols-2 gap-10'>
                  <div className=' col-span-2  grid grid-rows-2 tablet:col-span-1 '>
                    <label className='row-span-1 flex items-center'>First Name*</label>
                    <input
                      type='text'
                      placeholder='first name'
                      className='row-span-1 rounded-md border px-4 py-2 focus:outline-none dark:border-gray-500 dark:bg-main-bg-dark'
                    />
                  </div>
                  <div className='col-span-2 grid grid-rows-2 tablet:col-span-1'>
                    <label className='row-span-1 flex items-center'>Last Name*</label>
                    <input
                      type='text'
                      placeholder='last name'
                      className='row-span-1 rounded-md border px-4 py-2 focus:outline-none dark:border-gray-500 dark:bg-main-bg-dark'
                    />
                  </div>
                </div>

                <div className='mb-5 grid grid-rows-3'>
                  <label className='row-span-1 flex items-center'>Email Address*</label>
                  <input
                    type='text'
                    placeholder='Email Address'
                    className='row-span-1 rounded-md border px-4 py-2 focus:outline-none dark:border-gray-500 dark:bg-main-bg-dark'
                  />
                  <span className='mt-2 text-sm text-red-500'>Email is required.</span>
                </div>

                <div className='mb-5 grid grid-rows-2 gap-2'>
                  <label className='row-span-1 flex items-center'>Gender</label>
                  <div className='row-span-1'>
                    <input type='radio' className='mr-2' id='gender' name='gender' checked />
                    Male
                    <input type='radio' id='gender' className='ml-4 mr-2' name='gender' />
                    Female
                  </div>
                </div>

                <div className='mb-5'>
                  <label className=' flex items-center'>BirdDay</label>
                  <div className='grid-cols-2 gap-4'>
                    <input
                      type='date'
                      className='col-span-1 w-full rounded-md border px-4 py-2 focus:outline-none dark:border-gray-500 dark:bg-main-bg-dark tablet:w-1/3'
                    />
                  </div>
                </div>

                <div className='mb-5 grid grid-rows-2'>
                  <label className='row-span-1 flex items-center'>Phone Number*</label>
                  <input
                    type='text'
                    placeholder='(+84) 355 882 728'
                    className='row-span-1 rounded-md border px-4 py-2 focus:outline-none dark:border-gray-500 dark:bg-main-bg-dark'
                  />
                </div>

                <div className='mb-8 grid grid-rows-2'>
                  <label className='row-span-1 flex items-center'>Address</label>
                  <div className='row-span-1 grid grid-cols-8 gap-8 '>
                    <div className='col-span-8 tablet:col-span-4'>
                      <input
                        type='text'
                        placeholder='City'
                        className='row-span-1 w-full rounded-md border px-4 py-2 focus:outline-none dark:border-gray-500 dark:bg-main-bg-dark'
                      />
                    </div>
                    <div className='col-span-4 tablet:col-span-2'>
                      <select
                        placeholder='State'
                        defaultValue='s'
                        className=' w-full rounded-md border px-4 py-2.5 dark:border-gray-500 dark:bg-main-bg-dark'
                      >
                        <option value='a' disabled selected>
                          State
                        </option>
                        <option value='A'>Phú Yên</option>
                        <option value='B'>Khánh Hòa</option>
                        <option value='C'>Hà Nội</option>
                      </select>
                    </div>
                    <div className='col-span-4 tablet:col-span-2'>
                      <input
                        type='text'
                        placeholder='Zip'
                        className='row-span-1 w-full rounded-md border px-4 py-2 focus:outline-none dark:border-gray-500 dark:bg-main-bg-dark'
                      />
                    </div>
                  </div>
                </div>

                <div className='mb-5 grid-rows-2 gap-4'>
                  <label className='row-span-1 mb-4 flex items-center'>Description</label>
                  <textarea
                    name=''
                    id=''
                    className='row-span-1 w-full rounded-md border px-4 py-2 focus:outline-none dark:border-gray-500 dark:bg-main-bg-dark '
                    rows='10'
                  ></textarea>
                </div>

                <div className='mb-8'>
                  <input type='checkbox' className='' /> <span className='ml-2'>is Admin</span>
                </div>

                <div className='flex justify-start gap-4'>
                  <button className='rounded-[10px] bg-main-color px-4 py-2 text-white'>Submit</button>
                  <button className='rounded-[10px] bg-second-color   px-4 py-2 text-white'>Clear</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FormPage

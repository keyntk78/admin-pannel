import React from 'react'
import statusCards from '../../assets/JsonData/status-card-data.json'
import StatusCard from '../../components/StatusCard/StatusCard'
import Chart from 'react-apexcharts'
import Table from '../../components/Table/Table'
import { Link } from 'react-router-dom'
import Badge from '../../components/Badge/Badge'

const chartOptions = {
  series: [
    {
      name: 'Online Customers',
      data: [40, 70, 20, 90, 36, 80, 30, 91, 60]
    },
    {
      name: 'Store Customers',
      data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
    }
  ],
  options: {
    color: ['#6ab04c', '#2980b9'],
    chart: {
      background: 'transparent'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
    },
    legend: {
      position: 'top'
    },
    grid: {
      show: false
    }
  }
}

const topCustomers = {
  head: ['user', 'total orders', 'total spending'],
  body: [
    {
      username: 'john doe',
      order: '490',
      price: '$15,870'
    },
    {
      username: 'frank iva',
      order: '250',
      price: '$12,251'
    },
    {
      username: 'anthony baker',
      order: '120',
      price: '$10,840'
    },
    {
      username: 'frank iva',
      order: '110',
      price: '$9,251'
    },
    {
      username: 'anthony baker',
      order: '80',
      price: '$8,840'
    }
  ]
}

const renderCustomerHead = (item, index) => {
  return (
    <th className='px-[10px] py-[15px] capitalize' key={index}>
      {item}
    </th>
  )
}

const renderCustomerBody = (item, index) => {
  return (
    <tr key={index} className='text-left hover:bg-main-color hover:text-white'>
      <td className='px-[10px] py-[15px] capitalize '>{item.username}</td>
      <td className='px-[10px] py-[15px] capitalize '>{item.order}</td>
      <td className='px-[10px] py-[15px] capitalize '>{item.price}</td>
    </tr>
  )
}

const latestOrders = {
  header: ['order id', 'user', 'total price', 'date', 'status'],
  body: [
    {
      id: '#OD1711',
      user: 'john doe',
      date: '17 Jun 2021',
      price: '$900',
      status: 'shipping'
    },
    {
      id: '#OD1712',
      user: 'frank iva',
      date: '1 Jun 2021',
      price: '$400',
      status: 'paid'
    },
    {
      id: '#OD1713',
      user: 'anthony baker',
      date: '27 Jun 2021',
      price: '$200',
      status: 'pending'
    },
    {
      id: '#OD1712',
      user: 'frank iva',
      date: '1 Jun 2021',
      price: '$400',
      status: 'paid'
    },
    {
      id: '#OD1713',
      user: 'anthony baker',
      date: '27 Jun 2021',
      price: '$200',
      status: 'refund'
    }
  ]
}

const orderStatus = {
  shipping: '#349eff',
  pending: '#10d4d2',
  paid: '#019707',
  refund: '#fb0b12'
}

const renderOrderHead = (item, index) => {
  return (
    <th key={index} className='px-[10px] py-[15px] capitalize'>
      {item}
    </th>
  )
}

const renderOrderBody = (item, index) => (
  <tr key={index} className='text-left hover:bg-main-color hover:text-white'>
    <td className='px-[10px] py-[15px] capitalize '>{item.id}</td>
    <td className='px-[10px] py-[15px] capitalize '>{item.user}</td>
    <td className='px-[10px] py-[15px] capitalize '>{item.price}</td>
    <td className='px-[10px] py-[15px] capitalize '>{item.date}</td>
    <td className='px-[10px] py-[15px] capitalize '>
      <Badge type={orderStatus[item.status]} content={item.status} />
    </td>
  </tr>
)

const Dashboard = () => {
  return (
    <>
      <div className='grid grid-cols-12 gap-4'>
        <div className='col-span-12 desktop:col-span-6'>
          <div className='grid grid-cols-12 gap-4'>
            {statusCards.map((item, index) => {
              return (
                <div className='col-span-12 tablet:col-span-6' key={index}>
                  <StatusCard icon={item.icon} count={item.count} title={item.title} color={item.color} />
                </div>
              )
            })}
          </div>
        </div>
        <div className='col-span-12 desktop:col-span-6'>
          <div className='h-full  rounded-[15px] bg-main-bg px-[30px] py-[30px] shadow-main dark:bg-main-bg-dark dark:shadow-box-shadow-dark'>
            <Chart options={chartOptions.options} series={chartOptions.series} type='line' height='100%' />
          </div>
        </div>
        <div className=' laptop::col-span-5 col-span-12'>
          <div className='h-full rounded-[15px] bg-main-bg px-[30px] py-[30px] shadow-main dark:bg-main-bg-dark dark:shadow-box-shadow-dark'>
            <div className=''>
              <h3 className='pb-4 text-[18px] font-semibold'>Top customers</h3>
            </div>
            <div className=''>
              <Table
                headData={topCustomers.head}
                renderHead={(item, index) => renderCustomerHead(item, index)}
                bodyData={topCustomers.body}
                renderBody={(item, index) => renderCustomerBody(item, index)}
              />
            </div>
            <div className='pt-4 text-center'>
              <Link to='/' className='hover:text-main-color'>
                View all
              </Link>
            </div>
          </div>
        </div>
        <div className='laptop::col-span-7 col-span-12'>
          <div className='h-full rounded-[15px] bg-main-bg px-[30px] py-[30px] shadow-main dark:bg-main-bg-dark dark:shadow-box-shadow-dark'>
            <div className=''>
              <h3 className='pb-4 text-[18px] font-semibold'>Later Order</h3>
            </div>
            <div className=''>
              <Table
                headData={latestOrders.header}
                renderHead={(item, index) => renderOrderHead(item, index)}
                bodyData={latestOrders.body}
                renderBody={(item, index) => renderOrderBody(item, index)}
              />
            </div>
            <div className='pt-4 text-center'>
              <Link to='/' className='hover:text-main-color'>
                View all
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard

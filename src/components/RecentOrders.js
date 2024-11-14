import React from 'react'
import { EllipsisVertical } from 'lucide-react'

function RecentOrders() {

  const recentOrders = [
    { id: '#6548', customer: 'Joseph Wheeler', status: 'Pending', total: '$999.29' },
    { id: '#6548', customer: 'Joseph Wheeler', status: 'Completed', total: '$72.40' },
    { id: '#6548', customer: 'Joseph Wheeler', status: 'Pending', total: '$99.90' },
    { id: '#6548', customer: 'Joseph Wheeler', status: 'Pending', total: '$249.99' },
    { id: '#6548', customer: 'Joseph Wheeler', status: 'Completed', total: '$79.40' },
  ];

  return (
    <div className='bg-white shadow-md justify-between flex rounded py-3 px-3 md:px-6 md:py-4 h-auto w-full md:w-[580px]'>
       <div className='w-full'>
       <div className='flex justify-between items-center'>
              <h3 className='text-sm md:text-[18px] font-semibold text-[#23272E]'>Recent Orders</h3>
              <span className=''><EllipsisVertical /></span>
          </div>
          <div className='mt-5 overflow-scroll md:overflow-hidden'>
          <table className="w-full text-sm text-left">
              <thead className="text-xs text-[#8B909A] uppercase bg-[#DBDADE]">
                <tr>
                  <th className="px-3 py-1.5 md:px-5 md:py-3">ID</th>
                  <th className="px-3 py-1.5 md:px-5 md:py-3">customers</th>
                  <th className="px-3 py-1.5 md:px-5 md:py-3">status</th>
                  <th className="px-3 py-1.5 md:px-5 md:py-3">total</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((product, index) => (
                        <tr key={index} className="text-[#23272E] font-medium text-[15px]">
                    <td className="px-3 py-2 md:px-5 md:py-4 font-bold">{product.id}</td>
                    <td className="px-3 py-2 md:px-6 md:py-4">{product.customer}</td>
                    <td className={`px-3 py-2 md:px-5 md:py-4 flex gap-1 ${
                        product.status === 'Completed' 
                          ? ' text-[#1EB564]'
                          : ' text-[#FFC600]'
                      }`}>
                        <span>{product.status}</span>
                    </td>
                    <td className="px-3 py-2 md:px-6 md:py-4">{product.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
       </div>
    </div>
  )
}

export default RecentOrders
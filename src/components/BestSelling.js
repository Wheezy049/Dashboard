import React from 'react'
import { EllipsisVertical, Dot } from 'lucide-react'

function BestSelling() {

  const bestSellingProducts = [
    { product: 'Apple iPhone 13', totalOrder: '506', status: 'Stock', price: '$999.29' },
    { product: 'Nike Air Jordan', totalOrder: '506', status: 'Stock', price: '$72.40' },
    { product: 'Beats Studio 2', totalOrder: '506', status: 'Stock', price: '$99.90' },
    { product: 'Apple Watch Series 7', totalOrder: '506', status: 'Out', price: '$249.99' },
    { product: 'Amazon Echo Dot', totalOrder: '506', status: 'Stock', price: '$79.40' },
  ];

  return (
    <div className='bg-white mb-5 md:mb-0 shadow-md justify-between flex rounded py-3 px-3 md:px-6 md:py-4 h-auto w-full md:w-[580px]'>
      <div className='w-full'>
      <div className='flex justify-between items-center'>
              <h3 className='text-sm md:text-[18px] font-semibold text-[#23272E]'>Best Selling Products</h3>
              <span className=''><EllipsisVertical /></span>
          </div>
          <div className='mt-5 overflow-scroll md:overflow-hidden'>
          <table className="w-full text-sm text-left">
              <thead className="text-xs text-[#8B909A] uppercase bg-[#DBDADE]">
                <tr>
                  <th className="px-3 py-1.5 md:px-5 md:py-3">PRODUCT</th>
                  <th className="px-3 py-1.5 md:px-5 md:py-3">TOTAL ORDER</th>
                  <th className="px-3 py-1.5 md:px-5 md:py-3">STATUS</th>
                  <th className="px-3 py-1.5 md:px-5 md:py-3">PRICE</th>
                </tr>
              </thead>
              <tbody>
                {bestSellingProducts.map((product, index) => (
                        <tr key={index} className="text-[#23272E] font-medium text-[15px]">
                    <td className="px-3 py-2 md:px-5 md:py-4 font-bold">{product.product}</td>
                    <td className="px-3 py-2 md:px-6 md:py-4">{product.totalOrder}</td>
                    <td className={`px-3 py-2 md:px-6 md:py-4 flex gap-1 ${
                        product.status === 'Stock' 
                          ? ' text-[#1EB564]'
                          : ' text-[#D02626]'
                      }`}>
                        <Dot />
                        <span>{product.status}</span>
                    </td>
                    <td className="px-3 py-2 md:px-6 md:py-4">{product.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
      </div>
    </div>
  )
}

export default BestSelling
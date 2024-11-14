import React from 'react'
import { EllipsisVertical } from 'lucide-react'

function TrendingProducts() {

  const trendingProducts = [
    { product: 'Apple iPhone 13', itemId: 'IPXZ-5656', price: '$999.29' },
    { product: 'Nike Air Jordan', itemId: 'IPXZ-5456', price: '$72.40' },
    { product: 'Beats Studio 2', itemId: 'IPXZ-9446', price: '$99.90' },
    { product: 'Apple Watch Series 7', itemId: 'IPXZ-4056', price: '$249.99' },
    { product: 'Amazon Echo Dot', itemId: 'IPXZ-7892', price: '$129.48' },
  ];


  return (
    <div className='bg-white shadow-md justify-between flex rounded py-3 px-3 md:px-6 md:py-4 h-auto w-full md:w-[400px]'>
       <div className='w-full'>
       <div className='flex justify-between items-center'>
              <h3 className=' text-sm md:text-[18px] flex flex-col font-semibold text-[#23272E]'>
                <span>Trending Products</span>
                <span className='font-medium text-[#8B909A] text-xs md:text-sm'>Total 10.4K Visitors</span>
              </h3>
              <span className=''><EllipsisVertical /></span>
          </div>
          <div className='mt-5 overflow-scroll md:overflow-hidden'>
          <table className="w-full text-sm text-left">
              <tbody>
                {trendingProducts.map((product, index) => (
                  <tr key={index} className="text-[15px]">
                    <td className="px-3 py-1.5 md:px-6 md:py-3 flex flex-col text-[#23272E]">
                      <span className='font-bold'>{product.product}</span>
                      <span className="text-xs text-[#8B909A]">Item: {product.itemId}</span>
                    </td>
                    <td className="px-3 py-1.5 md:px-6 md:py-3 font-medium">{product.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
       </div>
    </div>
  )
}

export default TrendingProducts
import React from 'react'

function LastTransaction() {

  const lastTransactions = [
    { id: '#5089', date: '31 March 2023', total: '$1200' },
    { id: '#5089', date: '31 March 2023', total: '$1200' },
    { id: '#5089', date: '31 March 2023', total: '$1200' },
    { id: '#5089', date: '31 March 2023', total: '$1200' },
    { id: '#5089', date: '31 March 2023', total: '$1200' },
  ];

  return (
    <div className='bg-white shadow-md justify-between flex rounded py-3 px-3 md:px-6 md:py-4 h-auto w-full md:w-[580px]'>
        <div className='w-full'>
          <div className='flex justify-between items-center'>
              <h3 className='text-sm md:text-[18px] font-semibold text-[#23272E]'>Last Transaction</h3>
              <span className='text-xs md:text-sm font-semibold text-[#0F60FF]'>View All</span>
          </div>
          <div className='mt-6 overflow-scroll md:overflow-hidden'>
          <table className="w-full text-sm text-left">
              <thead className="text-xs text-[#8B909A] uppercase bg-[#DBDADE]">
                <tr>
                  <th className="px-3 py-1.5 md:px-5 md:py-3">ID</th>
                  <th className="px-3 py-1.5 md:px-5 md:py-3">ISSUED DATE</th>
                  <th className="px-3 py-1.5 md:px-5 md:py-3">TOTAL</th>
                  <th className="px-3 py-1.5 md:px-5 md:py-3">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {lastTransactions.map((transaction, index) => (
                  <tr key={index} className=" text-[15px] font-medium">
                    <td className="px-3 py-2 md:px-6 md:py-4 text-[#0F60FF]">{transaction.id}</td>
                    <td className="px-3 py-2 md:px-6 md:py-4 text-[#23272E]">{transaction.date}</td>
                    <td className="px-3 py-2 md:px-6 md:py-4 text-[#23272E]">{transaction.total}</td>
                    <td className="px-3 py-2 md:px-6 md:py-4">
                      <button className="text-[#0F60FF]">View Detail</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    </div>
  )
}

export default LastTransaction
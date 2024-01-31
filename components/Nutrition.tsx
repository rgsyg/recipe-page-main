import React from 'react'

const Nutrition = ({ font }: any) => {
  return (
    <section>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <h2 className={`${font} mb-4`}>Nutrition</h2>
      <p className="mb-4">The table below shows nutritional values per serving without the additional fillings.</p>
      <table className="w-full">
        <tr className='border-b-2'>
          <td className='pl-8 py-2'>Calories</td>
          <td className='pr-8 py-2 font-bold'>227kcal</td>
        </tr>
        <tr className='border-b-2'>
          <td className='pl-8 py-2'>Carbs</td>
          <td className='pr-8 py-2 font-bold'>0g</td>
        </tr>
        <tr className='border-b-2'>
          <td className='pl-8 py-2'>Protein</td>
          <td className='pr-8 py-2 font-bold'>20g</td>
        </tr>
        <tr>
          <td className='pl-8 py-2'>Fat</td>
          <td className='pr-8 py-2 font-bold'>22g</td>
        </tr>
      </table>
    </section>
  )
}

export default Nutrition
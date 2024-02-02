import React from 'react'

const Nutrition = ({ font }: any) => {
  return (
    <section>
      <hr className="h-px my-8 bg-light-grey"></hr>
      <h2 className={`${font} mb-4`}>Nutrition</h2>
      <p className="mb-4 text-wenge-brown">The table below shows nutritional values per serving without the additional fillings.</p>
      <table className="w-full">
        <tr className='border-b-2'>
          <td className='pl-8 py-3 text-wenge-brown'>Calories</td>
          <td className='pr-8 py-3 font-bold text-nutmeg'>227kcal</td>
        </tr>
        <tr className='border-b-2'>
          <td className='pl-8 py-3 text-wenge-brown'>Carbs</td>
          <td className='pr-8 py-3 font-bold text-nutmeg'>0g</td>
        </tr>
        <tr className='border-b-2'>
          <td className='pl-8 py-3 text-wenge-brown'>Protein</td>
          <td className='pr-8 py-3 font-bold text-nutmeg'>20g</td>
        </tr>
        <tr>
          <td className='pl-8 py-3 text-wenge-brown'>Fat</td>
          <td className='pr-8 py-3 font-bold text-nutmeg'>22g</td>
        </tr>
      </table>
    </section>
  )
}

export default Nutrition
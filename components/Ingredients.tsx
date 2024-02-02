import React from 'react'

const Ingredients = ({ font }: any) => {
  return (
    <section>
      <h2 className={`${font} mb-4`}>Ingredients</h2>
      <ul className="flex flex-col gap-2">
        <li className="pl-4 text-nutmeg"><span className="text-wenge-brown">2-3 large eggs</span></li>
        <li className="pl-4 text-nutmeg"><span className="text-wenge-brown">Salt, to taste</span></li>
        <li className="pl-4 text-nutmeg"><span className="text-wenge-brown">Pepper, to taste</span></li>
        <li className="pl-4 text-nutmeg"><span className="text-wenge-brown">1 tablespoon of butter or oil</span></li>
        <li className="pl-4 text-nutmeg"><span className="text-wenge-brown">Optional fillings: cheese, diced vegetables, cooked meats, herbs</span></li>
      </ul>
    </section>
  )
}

export default Ingredients
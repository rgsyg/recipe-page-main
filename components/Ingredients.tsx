import React from 'react'

const Ingredients = ({ font }: any) => {
  return (
    <section>
      <h2 className={`${font} mb-4`}>Ingredients</h2>
      <ol>
        <li>2-3 large eggs</li>
        <li>Salt, to taste</li>
        <li>Pepper, to taste</li>
        <li>1 tablespoon of butter or oil</li>
        <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
      </ol>
    </section>
  )
}

export default Ingredients
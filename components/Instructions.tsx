import React from 'react'

const Instructions = ({ font }: any) => {
  return (
    <section>
      <hr className="h-px my-8 bg-light-grey "></hr>
      <h2 className={`${font} mb-4`}>Instructions</h2>
      <ol className="flex flex-col gap-2 text-nutmeg font-bold">
        <li><div className="pl-4 text-wenge-brown">Beat the eggs<span className="font-normal">: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</span></div></li>
        <li><div className="pl-4 text-wenge-brown">Heat the pan<span className="font-normal">: Place a non-stick frying pan over medium heat and add butter or oil.</span></div></li>
        <li><div className="pl-4 text-wenge-brown">Cook the omelette<span className="font-normal">: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</span></div></li>
        <li><div className="pl-4 text-wenge-brown">Add fillings (optional)<span className="font-normal">: When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</span></div></li>
        <li><div className="pl-4 text-wenge-brown">Fold and serve<span className="font-normal">: As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</span></div></li>
        <li><div className="pl-4 text-wenge-brown">Enjoy<span className="font-normal">: Serve hot, with additional salt and pepper if needed.</span></div></li>
      </ol>
    </section>
  )
}

export default Instructions
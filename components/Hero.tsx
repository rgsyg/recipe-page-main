import Image from 'next/image'
import React from 'react'

const Hero = ({ font }: any) => {
    return (
        <section className="flex flex-col gap-4">
            <Image className='rounded-xl' src="/assets/images/image-omelette.jpeg" style={{
                width: '100%',
                height: 'auto',
            }} width={800} height={0} alt="Picture of omelette" />
            <h1 className={`${font} text-dark-charcoal`}>Simple Omelette Recipe</h1>
            <p className="text-dark-charcoal">An easy and quick dish, perfect for any meal This classic omelette combines beaten cooked to perfection, optionally filled choice of cheese, vegetables, or meats.</p>
        </section>
    )
}

export default Hero
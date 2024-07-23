"use client"
import React, { useCallback, useEffect, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import Autoplay from 'embla-carousel-autoplay'


type PropType = {
	slides: brandProps[]
	options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
	const { slides, options } = props
	const [emblaRef, emblaApi] = useEmblaCarousel(options, [
		AutoScroll({ playOnInit: true, stopOnInteraction:false })
	])
	const [isPlaying, setIsPlaying] = useState(true)



	useEffect(() => {
		const autoScroll = emblaApi?.plugins()?.autoScroll
		if (!autoScroll) return

		setIsPlaying(true)
		emblaApi
			.on('reInit', () => setIsPlaying(true))
	}, [emblaApi])

	return (
		<div className="embla w-full">
			<div className="embla__viewport" ref={emblaRef}>
				<div className="embla__container">
					{slides.map((data, index) => (
						<div className="embla__slide" key={index}>
							<div key={index} className='flex items-center gap-2'>
								<h3 className='text-center text-xl text-slate-700 font-medium'>{data.name}</h3>
								{/* <img src={data.img} alt={data.name} className='h-20 md:h-32' /> */}
							</div>
						</div>
					))}
				</div>
			</div>

		</div>
	)
}

export default EmblaCarousel
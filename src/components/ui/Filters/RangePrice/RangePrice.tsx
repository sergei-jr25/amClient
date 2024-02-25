'use client'

import { useDebounce } from '@/hooks/useDebaunce'
import { useFilters } from '@/hooks/useFilters'
import { useSearchParams } from 'next/navigation'
import { FC, useEffect, useState } from 'react'
import styles from './RangePrice.module.scss'

const RangePrice: FC = () => {
	const [priceFromValue, setPriceFromValue] = useState('')
	const [priceToValue, setPriceToValue] = useState('')

	const priceFrom = useDebounce(priceFromValue, 700)
	const priceTo = useDebounce(priceToValue, 700)

	const searchParams = useSearchParams()

	const minPrice = searchParams.get('minPrice')
	const maxPrice = searchParams.get('maxPrice')

	const { uploadNewParams } = useFilters()

	useEffect(() => {
		if (minPrice) setPriceFromValue(minPrice.toString())
	}, [])
	useEffect(() => {
		if (maxPrice) setPriceToValue(maxPrice.toString())
	}, [])

	useEffect(() => {
		if (priceFrom) uploadNewParams('minPrice', priceFrom)
	}, [priceFrom])

	useEffect(() => {
		if (priceTo) uploadNewParams('maxPrice', priceTo)
	}, [priceTo])

	return (
		<div className={styles.range}>
			<form className={styles.range__form}>
				<input
					value={priceFromValue}
					onChange={e => setPriceFromValue(e.target.value)}
					className={styles.range__input}
					placeholder='from'
				/>

				<input
					value={priceToValue}
					onChange={e => setPriceToValue(e.target.value)}
					className={styles.range__input}
					placeholder='to'
				/>
			</form>
		</div>
	)
}
export default RangePrice

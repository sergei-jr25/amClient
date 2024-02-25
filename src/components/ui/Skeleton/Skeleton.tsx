import styles from './Skeleton.module.scss'

const Skeleton = ({ height, width }: { height?: string; width?: string }) => {
	return (
		<div
			data-testid='skeleton-test'
			className={styles.skeleton}
			style={{ height: height, width: width }}
		>
			<div className={styles.shape}></div>
		</div>
	)
}

export default Skeleton

import styles from './styles.module.css'

import { PostListContainer } from '@/features/post-list/ui/container'

export const HomePage = () => {
  return (
    <section className={styles.root}>
      <h1 className={styles.title}>Список постов:</h1>
      <PostListContainer />
    </section>
  )
}

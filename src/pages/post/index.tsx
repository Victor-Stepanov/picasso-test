import styles from './styles.module.css'

import { PostDetailsContainer } from '@/features/post-details/ui/container'

export const PostPage = () => {
  return (
    <section className={styles.root}>
      <h2 className={styles.title}> Информация о посте</h2>
      <PostDetailsContainer />
    </section>
  )
}

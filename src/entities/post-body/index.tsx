import React from 'react'

import styles from './styles.module.css'

import { IPost } from '@/shared/types'

interface Props extends Omit<IPost, 'userId'> {
  isShortInfo: boolean
}

export const PostBody: React.FC<Props> = ({ title, body, id, isShortInfo }) => {
  return (
    <div className={styles.root}>
      <span className={styles.postNumber}>{`№ ${id}`}</span>
      <div className={styles.postInfo}>
        <h3 className={styles.postTitle}>{title}</h3>
        <p className={isShortInfo ? styles.postDescriptionShort : styles.postDescription}>{body}</p>
      </div>
    </div>
  )
}

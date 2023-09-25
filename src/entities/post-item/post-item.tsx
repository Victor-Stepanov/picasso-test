import React from 'react'

import { useLocation } from 'react-router-dom'

import styles from './styles.module.css'

import { PostBody } from '../post-body'

import { IPost } from '@/shared/types'

import { BaseLink } from '@/shared/ui/base-link'
import { Button } from '@/shared/ui/button'

interface Props {
  post: IPost
}

export const PostItem: React.FC<Props> = ({ post }) => {
  const location = useLocation()
  const isShortInfo = location.pathname === '/'
  const path = location.pathname.includes('post') ? '/' : `post/${post.id}`
  const buttonText = location.pathname.includes('post') ? 'На главную' : 'Просмотр'

  return (
    <div className={styles.root}>
      <PostBody isShortInfo={isShortInfo} id={post.id} title={post.title} body={post.body} />
      <BaseLink to={path}>
        <Button viewVariant='primary'>{buttonText}</Button>
      </BaseLink>
    </div>
  )
}

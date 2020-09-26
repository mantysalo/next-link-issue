import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return ( <ul>
    <li>
      <Link
        href={{
          pathname: '/blog/[slug]',
          query: { slug: 'my-post' },
        }}
      >
        <a>Blog Post</a>
      </Link>
    </li>
  </ul>
  )
}

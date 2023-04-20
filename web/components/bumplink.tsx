import Link from 'next/link'
import clsx from 'clsx'

export function BumpLink(props: {
    className?:string
    title:string
    wikititle:string
}) {
  const {className, title, wikititle} = props

  return (
    <div>
      <div className="relative flex items-center">
        <div className="ml-3">
          {/* text should be purple */}
          <label htmlFor={title} className={clsx(
        'text-primary-700 mb-4 inline-block text-2xl font-normal sm:mb-6 sm:text-3xl sm:font-normal',
        className
      )}>
            <Link href={wikititle}>{title}</Link>
          </label>
        </div>
      </div>
    </div>
  )
}

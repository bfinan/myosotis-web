import Link from 'next/link'

export function BumpLink(props: {
    title:string
    wikititle:string
}) {
  const { title, wikititle} = props

  return (
    <div>
      <div className="relative flex items-center">
        <div className="ml-3">
          <label htmlFor={title} className="text-ink-700  font-medium">
            <Link href={wikititle}>{title}</Link>
          </label>
        </div>
      </div>
    </div>
  )
}

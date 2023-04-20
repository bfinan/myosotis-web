import clsx from 'clsx'

{/* a timer readout primarily designed for myosotis pacer */}

export function Readout(props: {
    className?:string;

    seconds:number

}) {
  const {className, seconds} = props

  return (
    <div>
      <div className="relative flex items-center">
        <div className="ml-3">
          {seconds} seconds
        </div>
      </div>
    </div>
  )
}

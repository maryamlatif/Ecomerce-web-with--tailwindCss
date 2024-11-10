import { FC } from "react"

const Wrapper: FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div className="max-w-screen-2xl  mx-auto py-4 sm:text-center">
      {children}
    </div>
  )
}

export default Wrapper;




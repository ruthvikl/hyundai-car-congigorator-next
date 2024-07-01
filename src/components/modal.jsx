import { useEffect } from "react"

export const Modal = ({visible , setVisibility, title, description}) => {
  useEffect(() => {
    setTimeout(() => {
      setVisibility(false)
    }
    , 5000)
  }, [visible])
  return(
    <div className={`fixed top-0 left-0 w-full h-full fixed bg-black/60 z-20 ${visible ? 'block' : 'hidden'}`} onClick={() => setVisibility(false)}>
      <div className='text-white w-10/12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 text-center'>
        <p className='text-xl border-b border-black'>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  )
}
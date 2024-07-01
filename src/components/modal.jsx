export const Modal = ({visible , setVisibility, title, description}) => {
  const handleXClick = () => {
    setVisibility(false)
  }
  return(
    <div className={`fixed top-0 left-0 w-full h-full fixed z-20 pointer-events-none ${visible ? 'fade-in' : 'fade-out'}`}>
      <div className='text-white w-10/12 bg-black/60 rounded-lg absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 text-center flex flex-col justidy-center'>
        <p className='text-xl'>{title}</p>
        <p>{description}</p>
        <div className="bg-white w-fit mx-auto text-black rounded-full px-2 py-0.5 pointer-events-auto" onClick={handleXClick}>X</div>
      </div>
    </div>
  )
}
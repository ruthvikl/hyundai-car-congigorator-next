export const Modal = ({visible , setVisibility, title, description}) => {
  const handleXClick = () => {
    setVisibility(false)
  }
  return(
    <div className={`fixed w-full z-20 bottom-10 pointer-events-none ${visible ? 'fade-in' : 'fade-out'}`}>
      <div className='text-white w-10/12 bg-black/60 rounded-lg mx-auto p-5 text-center flex flex-col justidy-center'>
        <p className='text-lg'>{title}</p>
        <p className='text-sm'>{description}</p>
        <div className="bg-white w-fit mx-auto text-black rounded-full px-2 py-0.5 pointer-events-auto" onClick={handleXClick}>X</div>
      </div>
    </div>
  )
}
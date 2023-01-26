import Image from "next/image"

export default function mountain () {
  return (
    <div className='grid grid-cols-3 gap-4'>
        <div className='rounded max-w-sm overflow-hidden shadow-lg'>
<Image src={'/images/pic2.jpg'}  width={250} height={150} />
        </div>
      
    </div>
  )
}



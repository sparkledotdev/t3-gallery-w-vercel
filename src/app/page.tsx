import Link from "next/link";

export default function HomePage() {
  const mockUrl =[
    'https://utfs.io/f/URKYdZLRQnfki3xZtkuJ80NTvLEqZDXKHGcsgMj6eUCxSlAr',
    'https://utfs.io/f/URKYdZLRQnfkk6fiivCETF3PMDUEJAi0Spg8h2NuwoqXvjtR',
    'https://utfs.io/f/URKYdZLRQnfkCBOI9z3dHPwNmx95yY8gocTzApeQSEtrFXIs',
    'https://utfs.io/f/URKYdZLRQnfkNjgiv83UybvVxT5CaPg0DGkS3oEfr41OeFIt'
  ]
  const images = [...mockUrl,...mockUrl,...mockUrl].map((url,index)=> ({id:index+1, url}))
  return (
    <main className="">
      <div className="flex flex-wrap gap-4 justify-center lg:justify-normal">
        {images.map((img)=> <div key={img.id} className="w-48"><img src={img.url} /></div>
      )}
      </div>
    </main>
  );
}

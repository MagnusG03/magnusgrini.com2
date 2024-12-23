import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface PortfolioElementProps {
  title: string
  imageSrc: string | StaticImageData;
  projectUrl: string
}

export default function PortfolioElement({ title, imageSrc, projectUrl }: PortfolioElementProps) {
  return (
    <Link href={projectUrl} className="group">
      <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:opacity-75"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-all duration-300 ease-in-out group-hover:bg-opacity-50">
          <h3 className="text-center text-2xl font-bold text-white opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  )
}


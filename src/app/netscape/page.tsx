import Triceratops from '@/components/ui/triceratops';

export default function Netscape() {

    return (
      <div className="container min-h-[calc(100vh-80px)] mx-auto sm:py-12 flex justify-center">
        <Triceratops animation='triceratops-run' characterSheet='triceratopsRunSheet.webp' frames={3}/>
      </div>
    )
  }
  
  
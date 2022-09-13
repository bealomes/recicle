import Image from "next/image"

export default function Home() {
  return (
    <div className={" bg-background-principal  h-screen w-full overflow-hidden"}>  
      <div className="relative">
        <div className="absolute right-0 bg-local">
          <Image  width={"750"} height={"600"} src={"/image/Vector.png"}/>
        </div> 
      </div>  
      <div className={"container m-auto max-w-normal"}>
        <div className=" flex justify-between py-5">
          <Image width={"250"} height={"50"} priority src={"/image/logo.png"} alt="Logo Recicle++"/>
          <div className="grid grid-cols-2 py-2 z-10">
              <div className="flex px-2 align-baseline">
              <svg class="w-6 h-6 " fill="white" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                <p className="text-white text-lg px-1"> Administração</p>
                <div className="bg-white w-0.5 h-8 "></div>
              </div>
              <div className="flex">
              <svg class="w-6 h-6 " fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path></svg>
                <p className=" text-white text-lg px-1" >Insituições</p>
              </div>
          </div>
        </div>
        <div className="grid grid-rows-3 grid-flow-col gap-4">
          <div className="row-start-2 row-end-3">
            <div className="text-verde-padrao font-Inter font-extra-bold drop-shadow-lg ">
                <p className="text-tx">FAÇA PARTE DA</p>
                <p className="text-txg">MUDANÇA</p>
            </div>
            <div className="py-2">
              <p className="break-normal font-Poppins">Nós sabemos que você quer começar a reciclar, mas não </p>
              <p className="break-normal font-Poppins">sabe por onde começar.</p>
            </div>
            <div className="">
              
            </div>
         </div>
        </div>
       
      </div>
      <div className="flex ">
        <div className="absolute fixed bottom-0 right-10 h-510 w-800 ">
        <Image  width={"650"} height={"400"} priority src={"/image/lixos-reci.jpg"} alt="Lixos reciclagem"/></div>
      </div>
    
    </div>
  )
}




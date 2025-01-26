function Profilelist({ispacked , name}){
  return <li className="text-sm">{name}</li>
}

export  default function Profile() {
  <section>
     <img src="logo192.png" alt="" />
    <h1 className="font-bold text-2xl">
     
   Remi's packing List
    </h1>
    <ul>
    <Profilelist name="Shoes" ispacked={true} />
    <Profilelist name="Hat" ispacked={true} />
    <Profilelist name="Sunglasses" ispacked={true} />
    </ul>
  </section>
}
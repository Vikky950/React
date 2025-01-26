export default function Index(){
    return(
        <section>
            <h1 className=" text-white">React images</h1>
           <Gallery />
        </section>
       
    )
}

function Gallery(){
    return(

        <img
        src="logo192.png" 
        alt=" This is an image" 
        />
    )
}
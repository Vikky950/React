export default  function New() {
    return(
        <Gallery 
        onplaymovie={() => alert('Playing Movie')}
        OnuploadImage={() => alert('Uploading Image')}
        />
    )
}







function Gallery({onplaymovie, OnuploadImage}) {
    return(
        <div>
            <button className="bg-cyan-200 p-8 mx-4"  onClick={onplaymovie}>
                Play Movie
            </button>

            <button className="bg-cyan-200" onClick={OnuploadImage}> 
                upload Image
                </button>
        </div>
    )
}

function Button({ onClick, children }) {
    return (
      <button onClick={onClick}>
        {children}
      </button>
    );

}

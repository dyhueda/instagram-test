"use client"
export default function Footer(){
  function goToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
    return(
        <footer>
          <div className="flex bg-black text-white p-4 justify-center text-xl">
            <p>Created By Diego Ueda</p>
            <button onClick={goToTop} className="absolute right-10">Top</button>
          </div>
        </footer>
    )
}

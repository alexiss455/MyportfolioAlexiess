
export default function(){
return(
    
    <div
    className=" flex flex-col gap-1 sm:hidden"
    onClick={headerClose}
  >
    <div
      className={` w-6 h-0.5 bg-Green  duration-500 z-50 ${
        humbergerMenu ? "rotate-45 translate-y-1.5" : ""
      }`}
    ></div>
    <div
      className={`-z-10 w-6 h-0.5  bg-Green rounded  duration-500 ${
        humbergerMenu ? "opacity-0" : ""
      }`}
    ></div>
    <div
      className={`w-6 h-0.5  bg-Green rounded  duration-500 z-50 ${
        humbergerMenu ? "-rotate-45 -translate-y-1.5" : ""
      }`}
    ></div>
  </div>
)
}
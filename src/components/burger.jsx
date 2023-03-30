const burger = ({headerClose, top, center, bottom}) =>{
return(
    <div
    className=" flex flex-col gap-1 sm:hidden"
    onClick={headerClose}
  >
    <div
      className={`${top} w-6 h-0.5 bg-Green  duration-500 z-50 `}
    ></div>
    <div
      className={`${center} -z-10 w-6 h-0.5  bg-Green rounded  duration-500  `}
    ></div>
    <div
      className={`${bottom} w-6 h-0.5  bg-Green rounded  duration-500 z-50 
      `}
    ></div>
  </div>
)
}
export default burger;
export default function rightsideContent(){
    return(
        <div className=" fixed bottom-1 right-14 max-sm:hidden">
            <div>
                <ul className=" flex flex-col gap-4 text-2xl items-center text-Lightest-Slate">
                <a  href="mailto:alexissmanalastas@gmail.com" className= "hover:-translate-y-2 hover:text-Green duration-500 text-sm font-sans cursor-pointer align-text-top" style={{writingMode: "vertical-rl"}}>alexissmanalastas@gmail.com</a>
                <div className=" w-0.25 h-28 w-one bg-Lightest-Slate"></div>
                </ul>
            </div>
        </div>
    );
}
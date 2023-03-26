
const leftsideContent = () =>{
    return(
        <div className={` fixed bottom-1 left-14 max-sm:hidden navanimate setnav5`}>
            <div>
                <ul className={` flex flex-col gap-3 text-2xl items-center justify-center text-Lightest-Slate`}>
                <li className=" hover:-translate-y-2 duration-500"><a target='_blank' href="https://github.com/alexiss455"><i className=" hover:text-Green ri-github-line"></i> </a></li>
                <li className=" hover:-translate-y-2 duration-500"><a target='_blank' href="https://www.linkedin.com/in/alexiess-o-manalastas-566326243/"><i className=" hover:text-Green ri-linkedin-line"></i></a></li>
                <li className=" hover:-translate-y-2 duration-500"><a target='_blank' href="https://www.facebook.com/alexissmanalastas/"><i className=" hover:text-Green ri-facebook-line"></i></a></li>
                <li className=" hover:-translate-y-2 duration-500"><a target='_blank' href="https://codepen.io/alexiess"><i className=" hover:text-Green ri-codepen-fill"></i></a></li>
                <div className={` w-0.25 h-28 w-one bg-Lightest-Slate`}></div>
                </ul>
            </div>
        </div>
    );
}
export default leftsideContent;
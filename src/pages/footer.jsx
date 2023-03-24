import LeftsideContent from "../components/Leftsidecontent";
export default function footer(){
    return(
        <div className="text-center ">
        <LeftsideContent/>
            <footer className="text-Lightest-Slate h-20  max-sm:h-24 flex items-center justify-center flex-col">
                <div className={` flex flex-row gap-1 text-2xl items-center justify-center text-Lightest-Slate sm:hidden`}>
                <a target='_blank' href="https://github.com/alexiss455"><i className=" hover:text-Green ri-github-line"></i> </a>
                <a target='_blank' href="https://www.linkedin.com/in/alexiess-o-manalastas-566326243/"><i className=" hover:text-Green ri-linkedin-line"></i></a>
                <a target='_blank' href="https://www.facebook.com/alexissmanalastas/"><i className=" hover:text-Green ri-facebook-line"></i></a>
                <a target='_blank' href="https://codepen.io/alexiess"><i className=" hover:text-Green ri-codepen-fill"></i></a>
                </div>
               <a className="font-sans text-base flex items-center gap-x-1 hover:text-Green hover:-translate-y-1 duration-200" href="https://github.com/alexiss455/MyportfolioAlexiess" target='_blank' ><i className="ri-github-line text-2xl max-sm:hidden"></i>GitHub Source Code</a>
               <p className="text-gray-400 text-sm mt-1">2023 © Alexiess • All Rights Reserved.</p>
            </footer>
        </div>
    );  
}
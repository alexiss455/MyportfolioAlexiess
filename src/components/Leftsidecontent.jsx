import React from "react";
export default function leftsideContent(){
    return(
        <div className=" absolute bottom-1 left-14">
            <div>
                <ul className=" flex flex-col gap-3 text-2xl items-center text-Lightest-Slate">
                <li className=" hover:-translate-y-2 duration-500"><a href=""><i className=" hover:text-Green ri-github-line"></i> </a></li>
                <li className=" hover:-translate-y-2 duration-500"><a href=""><i className=" hover:text-Green ri-linkedin-line"></i></a></li>
                <li className=" hover:-translate-y-2 duration-500"><a href=""><i className=" hover:text-Green ri-facebook-line"></i></a></li>
                <li className=" hover:-translate-y-2 duration-500"><a href=""><i className=" hover:text-Green ri-codepen-fill"></i></a></li>
                <div className=" w-0.25 h-28 w-one bg-Lightest-Slate"></div>
                </ul>
            </div>
        </div>
    );
}
import React from 'react';
import pic from './images/pic.jpg';

function About() {
    return (
        <div className="grid grid-flow-row md:grid-flow-col  md:grid-cols-2 grid-cols-1 bg-primary mt-10">
            <div className="flex justify-center px-10 md:pl-20 py-10">
                <p>
                    <p className="font-extrabold text-secondary md:text-2xl">About Me</p><br/>
                    <p className="text-lighternavyblue font-semibold text-sm">My name is Sambit Saha. Love to do programing. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                </p>
            </div>
            <div className="flex justify-center items-center py-10">
                <img src={pic} className="w-5/12 rounded-full border-4 border-separate border-blue-900"/>
            </div>
        </div>
    )
}

export default About

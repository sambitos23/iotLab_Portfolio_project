import React, {useState} from 'react';
import ProjectComp from './ProjectComp';

function Project() {
    const [b, setB] = useState([
        {
            id: 1,
            imageUrl: 'https://source.unsplash.com/user/erondu/1600x900',
            desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio',
            git_link: '',
            project_link: '',
        },
        {
            id: 2,
            imageUrl: 'https://source.unsplash.com/user/tobbes_rd/1600x900',
            desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio',
            git_link: '',
            project_link: '',
        },
        {
            id: 3,
            imageUrl: 'https://source.unsplash.com/collection/190727/1600x900',
            desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio',
            git_link: '',
            project_link: '',
        },
    ])
    return (
        <div className="overflow-hidden" id="project">
            <div className="hidden md:flex absolute md:w-6/12 h-96 lg:h-full bg-neon right-0 z-0 opacity-20" style={{clipPath: "polygon(14% 0, 100% 49%, 100% 66%, 22% 100%)"}}></div>
            <div className="mt-10">
                <p className="text-center font-extrabold text-secondary text-xl md:text-4xl pt-10">Projects</p>
                <div className='md:flex md:justify-around mt-8 w-10/12 m-auto gap-3'>
                    {
                        b.map(({id, ...otherprops}) => (
                            <ProjectComp key={id} {...otherprops} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Project;

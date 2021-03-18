import React from 'react'

function BlogComp(props) {
    return (
        <div className="mt-12 rounded-2xl shadow-lg mb-12 bg-primary">
            <table className="overflow-hidden rounded-2xl">
                  <tr>
                      <td className="w-6/12 object-cover h-full">
                        <img
                            className="w-full object-cover h-80 md:h-68 lg:h-54"
                            src={props.imageUrl}
                            alt="First slide"
                        />
                      </td>
                      <td className="w-6/12">
                      <p className='text-xs md:text-sm p-12 text-center'>
                        <p className="font-extrabold md:text-lg">{props.titel}</p>
                        <p>{props.date}</p><br/><br/>
                        <div className="hidden md:flex justify-center"> 
                            <a href={props.link}className="bg-secondary text-white px-4 py-2 rounded-lg shadow-lg">View My Content</a>
                        </div>
                        <div className="md:hidden justify-center"> 
                            <a href={props.link}className="bg-secondary text-white px-2 py-1 rounded-lg shadow-lg">Content</a>
                        </div>
                    </p>
                      </td>
                  </tr>
              </table>
        </div>
    )
}

export default BlogComp

import React from 'react'

const Header = () => {
    const headers = [{name:"Rooms"},{name:"Pools"},{name:"Lakefront"},{name:"Park"},{name:"Castles"},{name:"Cabins"},{name:"Farms"},{name:"Islands"},{name:"Condominium"},{name:"Apartment"},];
    return (
        <div className=" h-16 flex gap-2 flex-row g-1 justify-between ">
            { headers.map((head)=>(
                <div className=" w-full h-full cursor-pointer hover:border-b-4 box-content ">
                <div className=" w-full h-full flex flex-col justify-center items-center p-0 m-0">
                    <svg className="svg-icon" viewBox="0 0 20 20">
                        <path d="M17.638,6.181h-3.844C13.581,4.273,11.963,2.786,10,2.786c-1.962,0-3.581,1.487-3.793,3.395H2.362c-0.233,0-0.424,0.191-0.424,0.424v10.184c0,0.232,0.191,0.424,0.424,0.424h15.276c0.234,0,0.425-0.191,0.425-0.424V6.605C18.062,6.372,17.872,6.181,17.638,6.181 M13.395,9.151c0.234,0,0.425,0.191,0.425,0.424S13.629,10,13.395,10c-0.232,0-0.424-0.191-0.424-0.424S13.162,9.151,13.395,9.151 M10,3.635c1.493,0,2.729,1.109,2.936,2.546H7.064C7.271,4.744,8.506,3.635,10,3.635 M6.605,9.151c0.233,0,0.424,0.191,0.424,0.424S6.838,10,6.605,10c-0.233,0-0.424-0.191-0.424-0.424S6.372,9.151,6.605,9.151 M17.214,16.365H2.786V7.029h3.395v1.347C5.687,8.552,5.332,9.021,5.332,9.575c0,0.703,0.571,1.273,1.273,1.273c0.702,0,1.273-0.57,1.273-1.273c0-0.554-0.354-1.023-0.849-1.199V7.029h5.941v1.347c-0.495,0.176-0.849,0.645-0.849,1.199c0,0.703,0.57,1.273,1.272,1.273s1.273-0.57,1.273-1.273c0-0.554-0.354-1.023-0.849-1.199V7.029h3.395V16.365z"></path>
                    </svg>
                    <div><p >{head.name}</p></div>
                </div>
            </div>
            )) }
            
           


        </div>

    )
}

export default Header

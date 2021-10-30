import React from "react";
 
const Card=()=>{
    return(
     <>
     <div className="container">
         <div className="row">
             <div className="col-sm-4">
                 <Card
                 title='Data Analysis'
                 desc='I dont know'
                 img='img2.jpg'
                 button= 'apply now'
                 />
             </div>
             <div className="col-sm-4">
             <Card
                 title='Backend'
                 desc='I dont know'
                 img='img3'
                 button= 'apply now'
                 />
             </div>
             <div className="col-sm-4">
             <Card
                title='Full stack'
                desc='I dont know'
                img='img4'
                button= 'apply now'
                 />
             </div>
          </div>
     </div>
     </>
)
}
export default Card;
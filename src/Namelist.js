import React from 'react'

function NameList(){
  //  var name=['jil','jung','jack']
    // return(
    //     <div>
    //         {
    //             name.map((name)=><h3>{name}</h3>)
    //         }
    //     </div>
    // )


//     const name =['La','Li','pop']
// const nameList= name.map((name)=><h2>{name}</h2>)
// }
// export default NameList




const character = [
    {
        id:1,
        cast:'Steve',
        name:'captain',
        special:'strongest',

    },
    {
        id:2,
        cast:'dawney-jr',
        name:'iron',
        special:'shield',

    }

]
const personList =character.map((his) => <h3> {his.cast} is a {his.name} America .he is an {his.special} Avenger</h3>)
return <div>{personList}</div>
}
export default NameList






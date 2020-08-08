import React from 'react'
import ReactTable from "react-table-6"


class DemoTable extends React.Component{
            render(){
                const details=[
                    {
                        subject:'C.Maths',
                        Result:'C'
                    },
                        {
                        subject:'Physics',
                        Result:'B'
                    },    {
                        subject:'Chemistry',
                        Result:'S'
                    },    {
                        subject:'English',
                        Result:'S'
                    },
                ]
                const heads=[
                    {
                        Header:'Subject',
                        accessor:'subject'
                    },{
                        Header:'Result',
                        accessor:'Result'
                    }
                ]

                return(
                    <>
                    <ReactTable  data={details}  columns={heads}/>
                    </>
                )
            }

            
}
export default DemoTable

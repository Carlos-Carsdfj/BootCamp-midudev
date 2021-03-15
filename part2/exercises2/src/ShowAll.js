export const ShowAll = ({phones})=>{


return(
    <div>
        <h1>Number</h1>
        
        <ul>
            {phones.map((phone)=><li key={phone.id} ><strong>{phone.name} :</strong> {phone.number}</li>)

            }

        </ul>

        


    </div>

)


}
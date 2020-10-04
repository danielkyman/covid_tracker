import React, {useEffect} from 'react';
import axios from 'axios';



const Map = () => {
    useEffect(() => {


        axios({
            "method":"GET",
            "url":"https://finnhub.io/api/v1/covid19/us",
            "params":{
            "token":"btsgdtf48v6tbbfiu7l0"
            }
            })
            .then((response)=>{
              console.log(response)
            })
            .catch((error)=>{
              console.log(error)
            })


        // axios({
        //     "method":"GET",
        //     "url":"https://finnhub.io/api/v1/stock/candle?symbol=AAPL&resolution=1&from=1572651390&to=1572910590",
        //     "params":{
        //     "token":"btsgdtf48v6tbbfiu7l0"
        //     }
        //     })
        //     .then((response)=>{
        //       console.log(response)
        //     })
        //     .catch((error)=>{
        //       console.log(error)
        //     })

    },[])


    return(
        <div className="Map">map_component</div>
    )
}

export default Map;
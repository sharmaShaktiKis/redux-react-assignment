import _ from 'lodash';
import {GetData} from '../apis/request';

export const fetchServicesAndProviders=()=> async (dispatch,getState)=>{
      await dispatch(fetchServices());
      await dispatch(fetchProviders());

  //await Promise.all(  userIds.forEach(id=>dispatch(fetchUser(id))));

}
export const fetchServices = () =>  async  (dispatch)=> {
             GetData("http://localhost:5000/api/services").then(result => {
                if (result != null) {
                    if(result.status==200)
                    {
                    console.log(result.data)
                    dispatch({type:"FETCH_SERVICES",payload:result.data.data})
                    }
                    else
                    dispatch({type:"FETCH_SERVICES",payload:[]})
                }
              });
           
    };

    export const fetchProviders=()=> async (dispatch)=>{
        GetData("http://localhost:5000/api/providers").then(result => {
            if (result != null) {
                if(result.status==200)
                dispatch({type:"FETCH_PROVIDERS",payload:result.data.data})
                else
                dispatch({type:"FETCH_PROVIDERS",payload:[]})
            }
          });
        // const response =await request.get('/providers?include=locations%2Cschedules.location&amp;page%5Bnumber%5D=1&amp;page%5Bsize%5D=10');
        // dispatch({type:"FETCH_PROVIDERS",payload:response.data})
        // const result = await GetData("http://localhost:5000/api/services").then(result => {
        //     if (result != null) {
        //         if(result.status==200)
        //         dispatch({type:"FETCH_SERVICES",payload:result.data})
        //         else
        //         dispatch({type:"FETCH_SERVICES",payload:[]})
        //     }
        //   });

    };

    
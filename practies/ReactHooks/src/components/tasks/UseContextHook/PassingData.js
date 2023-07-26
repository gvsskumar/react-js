import React,{createContext,useContext} from 'react';
const Context = createContext();
//Parent Component
const PassingData = ()=> {
    //const [info,SetInfo] = useState('Kumar');
    //const userInfo = [{uname:'Surya',email:'surya@gmail',status:'Active'}]
    const stringVal = "Kumar";
    const numberVal = 9346814210; 
    const booleanVal = true;
    const arrayVal = ["Red","Green","Yellow","Black","White"]
    const objectVal = [{stringVal:stringVal,numberVal:numberVal,booleanVal:booleanVal,arrayVal:arrayVal},{uname:'Surya',email:'surya@gmail',status:'Active'}]

  return (
    <Context.Provider value={objectVal}>
    <h1>PassingData: </h1>
    <p>{stringVal}</p>
    <p>{numberVal}</p>
    <p>{booleanVal}</p>
    <p>{arrayVal}</p>
    <Component1  />
    </Context.Provider>
    
  )
}

// Child Component1
export const Component1 = () =>{
    return (<>
        <h2>Component1 Content</h2>
        <Component2 />
    </>)
}

// Child Component2
export const Component2 = () =>{
    
    return (<>
    <h2>Component2 Content</h2>
        
        <Component3 />
    </>)
}

// Child Component3
export const Component3 = () =>{
    return (<>
     <h2>Component3 Content</h2>
       <Component4 />
    </>)
}

// Child Component4
export const Component4 = () =>{

   const getContextInfo = useContext(Context);
   console.log(getContextInfo);
    return (<>
         <h2>Component4 Content</h2>

    </>)
}

export default PassingData;
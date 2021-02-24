import React, { useLayoutEffect, useState } from 'react';

const App_6 = () => {

    const [fullname, setfullname] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",


    });


    const inputEvent = (event) => {
        console.log(event.target.value);
        console.log(event.target.name);

        // const value=event.target.value;
        // const name=event.target.name;

            // ----   OR (by the help of object destructing)  -------
         const {value,name}=event.target

        setfullname((preValue)=>{
            console.log(preValue);
            return{
                ...preValue,
                [name]:value,
            }

            // if(name==='fname'){
            //     return{
            //         fname:value,
            //         lname:preValue.lname,
            //         email:preValue.email,
            //         phone:preValue.phone,

            //     };
            // }
            // else  if(name==='lname'){
            //     return{
            //         fname:preValue.fname,
            //         lname:value,
            //         email:preValue.email,
            //         phone:preValue.phone,

            //     };
            // }
            // else  if(name==='email'){
            //     return{
            //         fname:preValue.fname,
            //         lname:preValue.lname,
            //         email:value,
            //         phone:preValue.phone,
            //     };
            // }
            // else  if(name==='phone'){
            //     return{
            //         fname:preValue.fname,
            //         lname:preValue.lname,
            //         email:preValue.email,
            //         phone:value,
                    
            //     };
            // }
        })
    }



    const onSubmit = (event) => {
        event.preventDefault();
        alert("form submitted ")
     };

    return (
        <>
            <div className="main-div">
                <form onSubmit={onSubmit}>
                    <div>
                        <h1> Hello {fullname.fname} {fullname.lname}</h1>
                        <h3>  {fullname.email} </h3>
                        <h3>  {fullname.phone} </h3>
                        <input type="text"
                            name='fname'
                            placeholder='Enter Your Name'
                            onChange={inputEvent}
                            value={fullname.fname}
                             />
                        <input type="text"
                            name='lname'
                            placeholder='Enter Your  Last Name'
                            onChange={inputEvent}
                            value={fullname.lname} 

                            />
                        <input type="email"
                            name='email'
                            placeholder='Enter Your  Email Id'
                            onChange={inputEvent}
                            value={fullname.email} 

                            />
                        <input type="number"
                            name='phone'
                            placeholder='Enter Your  Phone Number'
                            onChange={inputEvent}
                            value={fullname.phone} 

                            />
                        <button type="submit" > Clicked Me 👍 </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default App_6;
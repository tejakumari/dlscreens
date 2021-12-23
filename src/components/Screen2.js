import React from 'react'

const Screen2 = () => {
    return (
        <div class="border-2 border-gray-250 border-slate-900 w-100px h-100px">
            <img style={{width:800}} src="./assets/images/img8.png" class="ml-48 mt-6"/>
            <div class="ml-96 relative left-36 mb-36" style={{position:"relative",bottom:500}}>
                <img src="./assets/images/img1.png"/>
            </div>
            <div class="border-2 relative left-96 bg-white" style={{width:500,height:500,position:"relative",bottom:650}}>
                <button class="ml-20 mt-2 font-bold ">SIGN UP</button>
                <button class="ml-72 bg-slate-500 rounded-none w-52 p-2" style={{position:"relative",bottom:34}}>SING IN</button><br></br>
                <label class= "border outline-0 border-t-0 border-l-0 border-r-0  ml-14 text-sm text-gray-500  relative top-6 " > FIRST NAME</label>
                <label class="border outline-0 border-t-0 border-l-0 border-r-0 ml-40 text-gray-500 relative top-6" >LAST NAME</label><br /><br />
                <input class="border border-gray-500 border-t-0 border-l-0 border-r-0 relative right-8 p-2 mt-8 ml-14" style={{width:400}} type="text" placeholder='EMAIL ADDRESS'></input>  
                <input class="border border-gray-500 border-t-0 border-l-0 border-r-0 relative right-8 p-2 mt-8 ml-14" style={{width:400}} type="text" placeholder='MOBILE NUMBER'></input>  
                <label class= "border outline-0 border-t-0 border-l-0 border-r-0  ml-14 text-sm text-gray-500  relative top-6 " >PASSWORD</label>
                <label class="border outline-0 border-t-0 border-l-0 border-r-0 ml-40 text-gray-500 relative top-6" >CONFIRM PASSWORD</label><br /><br />
                <button class="ml-48 mt-2 bg-sky-600 hover:bg-sky-700 rounded-xl text-violet-50" style={{width:80,height:28}}>Sign up</button><br></br>
                <label class="ml-52 mb-10">OR</label>
                <img class="ml-32" src="./assets/images/in.png"/>
                <img class="ml-52 w-10 h-10 -mt-10"src="./assets/images/goolge.png"/>
                
            </div>
        </div>
    )
}

export default Screen2
import React from 'react'

const Screen3 = () => {
    return (
        <div class="border-2 border-gray-250 border-slate-900 w-100px h-100px">
            <img style={{width:800}} src="./assets/images/img8.png" class="ml-48 mt-6"/>
            <div class="ml-96 relative left-36 mb-36" style={{position:"relative",bottom:500}}>
                <img src="./assets/images/img1.png"/>
            </div>
            <div class="border-2 relative left-96 bg-white" style={{width:500,height:400,position:"relative",bottom:650}}>
                <button class="ml-20 mt-2 ">SIGN UP</button>
                <button class="ml-72 font-bold rounded-none w-52 p-2" style={{position:"relative",bottom:34}}>SING IN</button><br></br>
                <input class="border border-gray-500 border-t-0 border-l-0 border-r-0 relative right-8 p-2 mt-8 ml-14" style={{width:400}} type="text" placeholder='EMAIL ADDRESS'></input>  
                <input class="border border-gray-500 border-t-0 border-l-0 border-r-0 relative right-8 p-2 mt-8 ml-14" style={{width:400}} type="text" placeholder='PASSWORD'></input> 
                <label class="ml-40">Forget Password?</label>
                <button class="ml-48 mt-2 bg-sky-600 hover:bg-sky-700 rounded-xl text-violet-50" style={{width:80,height:28}}>Sign up</button><br></br>
                <label class="ml-52 mb-10">OR</label><br></br>
                <img class="ml-32" src="./assets/images/in.png"/><br></br>
                <img class="ml-48 w-16 h-16 -mt-15" src="./assets/images/g00.png"/>
                
            </div>
        </div>
    )
}

export default Screen3

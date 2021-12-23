import React from 'react'

const Screen24 = () => {
    return (
        <div style={{backgroundColor:"#EBF3FE",backgroundImage:"url(./assets/images/img8.png)"}} class="w-screen h-screen">
       
            <img src="./assets/images/img1.png" class="ml-96 relative left-60 top-16 "/>
            <div class="border-2 ml-96 relative left-32 mt-24 bg-white  " style={{width:500,height:400}}>
                <h2 class="relative left-40 font-medium mt-8">RESET YOUR PASSWORD</h2>
                <h6 class="relative left-10 mt-16 ">NEW PASSWORD</h6>
                <hr style={{width:400}} class="ml-10 mt-2"></hr>
                <h6 class="relative left-10 mt-12">CONFIRM PASSWORD</h6>
                <hr style={{width:400}} class="ml-10 mt-2"></hr>
                <button class="border-2 rounded-xl bg-blue-300 w-32 h-8 relative left-40 mt-20">SUBMIT</button> 
            </div>
        </div>
        
    )
}

export default Screen24;

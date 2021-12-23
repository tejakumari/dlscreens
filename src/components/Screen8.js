import React from 'react'

const Screen8 = () => {
    return (
        <div style={{backgroundImage:"url(./assets/images/img11.png)"}} class="h-screen bg-blue-100">
            <div>
                <img  class="ml-96 relative left-36 mt-10" src="./assets/images/img1.png"/>
                </div>
                <div class="border-2 relative left-96  border-orange-100 bg-white text-center" style={{width:500,height:400}}>
                <h4 class="mt-20 font-medium mt-8 ">RESET YOUR PASSWORD</h4>
                <p class="mt-4">Please provide the email address you used when you signed up</p>
                <p>for your OSAcad account</p>
               
                 <input class="border border-gray-500 border-t-0 border-l-0 border-r-0 relative right-8 p-2 mt-8" style={{width:400}} type="text" placeholder='EMAIL ADDRESS'></input>
                 <button class="border-2 rounded-xl bg-cyan-600 w-32 h-8 relative left-30 mt-20">SEND EMAIL</button> 
            </div>
            
        </div>
    )
}

export default Screen8

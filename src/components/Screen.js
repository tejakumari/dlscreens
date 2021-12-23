import React from 'react'

function Screen() {
    return (
        <div>
            <div class="mt-4 ml-20">
                <img src="./assets/images/img1.png"/>
            </div>
            <ul class=" flex justify-center gap-12 ml-36 relative bottom-12">
                <li>Courses</li>
                <li>Programs</li>
                <li>Contact Us</li>
                <button class="border-2 rounded-xl bg-yellow-300 w-32 h-8">Get Trained</button>
            </ul>
        </div>
    )
}

export default Screen;

const FAQQUESTIONSBOXs = document.querySelectorAll(".faq-questions-list");

FAQQUESTIONSBOXs.forEach(accordian =>{ //here accordian is a new variable just a name to pass the value
    
    const icon = accordian.querySelector(".icon");//basically specifying that we get the proper + icon for the proper iteration
    const answer = accordian.querySelector(".Answer");//basically specifying that we get the proper answer for the proper iteration
    const line = accordian.querySelector(".line");

    accordian.addEventListener("click", ()=>{
        icon.classList.toggle("active");//if active class present with icon class then remove and vice-versa
        answer.classList.toggle("active");//if active class present with icon class then remove and vice-versa
        line.classList.toggle("active");
    })

})
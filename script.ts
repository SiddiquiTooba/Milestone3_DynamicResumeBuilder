document.getElementById('resumeForm')?.addEventListener('submit',function(event){
    event.preventDefault();
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const contactElement = document.getElementById('contact') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;

    if (nameElement && emailElement && contactElement && educationElement &&experienceElement && skillsElement){
        const name = nameElement.value;
         const email= emailElement.value;
        const contact= contactElement.value;
        const education= educationElement.value;
        const experience= experienceElement.value;
        const skills= skillsElement.value;

        const resumeGenerated =`
        <h2>Resume</h2>
        <p><strong>First Name:</strong> ${name} </p>
          <p><strong>Email:</strong> ${email} </p>
        <p><strong>Contact No.:</strong> ${contact} </p>

        <h3>Education :</h3>
        <p>${education}</p>

        <h3>Experience :</h3>
        <p>${experience}</p>

        <h3>Skills :</h3>
        <p>${skills}</p>
        `;
        const resumeGeneratedElement =document.getElementById('resumeGenerated');
        if(resumeGeneratedElement){
            resumeGeneratedElement.innerHTML = resumeGenerated;
        }
        else {
            console.error('Elements are missing');
        }
      }
})
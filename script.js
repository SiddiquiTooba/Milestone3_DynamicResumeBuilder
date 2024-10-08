var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var contactElement = document.getElementById('contact');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (nameElement && emailElement && contactElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var contact = contactElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var resumeGenerated = "\n        <h2>Resume</h2>\n        <p><strong>Name:</strong> ".concat(name_1, " </p>\n        <p><strong>Email:</strong> ").concat(email, " </p>\n        <p><strong>Contact No.:</strong> ").concat(contact, " </p>\n\n        <h3>Education :</h3>\n        <p>").concat(education, "</p>\n\n        <h3>Experience :</h3>\n        <p>").concat(experience, "</p>\n\n        <h3>Skills :</h3>\n        <p>").concat(skills, "</p>\n        ");
        var resumeGeneratedElement = document.getElementById('resumeGenerated');
        if (resumeGeneratedElement) {
            resumeGeneratedElement.innerHTML = resumeGenerated;
        }
        else {
            console.error('Elements are missing');
        }
    }
});

// collapsable information in the border for style
function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    var content = section.querySelector('.hidden');

    content.style.display = (content.style.display === 'none' || content.style.display === '') ? 'block' : 'none';
}
// Function for the button

document.getElementById("understandButton").addEventListener("click", function() {
    alert("Thank you for understanding the context of Republict Act 10630!"); 
});
function showContent(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.remove('active');
  });
  
  const selectedSection = document.getElementById(sectionId);
  selectedSection.classList.add('active');
}

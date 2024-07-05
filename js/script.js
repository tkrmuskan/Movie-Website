document.addEventListener('DOMContentLoaded', () => {
    const userIcon = document.getElementById('userIcon');
    const loginPopup = document.getElementById('loginPopup');
    const closeLoginPopup = document.getElementById('closeLoginPopup');
    const signupPopup = document.getElementById('signupPopup');
    const closeSignupPopup = document.getElementById('closeSignupPopup');
    const signupBtn = document.getElementById('signupBtn');
  
    const searchIcon = document.getElementById('searchIcon');
    const searchPopup = document.getElementById('searchPopup');
    const closeSearchPopup = document.getElementById('closeSearchPopup');
  
    const bellIcon = document.getElementById('bellIcon');
    const bellPopup = document.getElementById('bellPopup');
    const closeBellPopup = document.getElementById('closeBellPopup');
  
    userIcon.addEventListener('click', () => {
      loginPopup.classList.toggle('active');
      popupOverlay.classList.toggle('active');
    });
  
    closeLoginPopup.addEventListener('click', () => {
      loginPopup.classList.remove('active');
      popupOverlay.classList.remove('active');
    });
  
    signupBtn.addEventListener('click', (e) => {
      e.preventDefault();
      loginPopup.classList.remove('active');
      signupPopup.classList.add('active');
    });
  
    closeSignupPopup.addEventListener('click', () => {
      signupPopup.classList.remove('active');
    });
  
    searchIcon.addEventListener('click', () => {
      searchPopup.classList.toggle('active');
      popupOverlay.classList.toggle('active');
    });
  
    closeSearchPopup.addEventListener('click', () => {
      searchPopup.classList.remove('active');
      popupOverlay.classList.remove('active');
    });
  
    bellIcon.addEventListener('click', () => {
      bellPopup.classList.toggle('active');
      popupOverlay.classList.toggle('active');
    });
  
    closeBellPopup.addEventListener('click', () => {
      bellPopup.classList.remove('active');
      popupOverlay.classList.remove('active');
    });
  
  });
  
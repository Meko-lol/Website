const emailSpan = document.querySelector('.email-link');
const emailAddress = "mail@jpetrak.dev";

emailSpan.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(emailAddress);
    
    // Visual feedback changes only the span's text
    emailSpan.textContent = "Copied!";
    
    // Revert text after 2 seconds
    setTimeout(() => {
      emailSpan.textContent = emailAddress;
    }, 2000);
    
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
});

window.onload = function () {
  console.log('korwa jestem za tepy')
  const alert = document.querySelector('.alert')
  if (alert) {
    setTimeout(() => {
      alert.classList.remove('opacity-100')
      alert.classList.add('opacity-0')
    }, 5000)
    setTimeout(() => {
      alert.classList.remove('d-flex')
      alert.classList.add('d-none')
      // alert.style.display = 'none !important'
    }, 6000)
  }
}

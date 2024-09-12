import './sample.css'

document.addEventListener('DOMContentLoaded', function () {
  const audio = document.getElementById('sound')
  const audioBtn = document.getElementById('button')

  audioBtn.addEventListener('click', () => {
    audio.play()
  })
})

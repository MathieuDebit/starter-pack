import './style.css'

function component () {
  const element = document.createElement('h1')
  element.innerHTML = 'Starter Pack'

  return element
}

document.body.appendChild(component())

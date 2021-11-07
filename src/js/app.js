const buttons = document.querySelectorAll('.btn')
// const editorContent = document.querySelector('.editor--content')

// editorContent.auto

const linkOrImageClicked = element => {
  return element === 'createLink' || element === 'insertImage'
}

const addLinkOrImage = (element) => {
  const url = prompt('insira uma url')
  const linkOrImageAdded = () => document.execCommand(element, false, url)
  linkOrImageAdded()
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const command = button.dataset.element

    console.log(command)

    if (linkOrImageClicked(command)) addLinkOrImage(command)

    else document.execCommand(command, false, null)
  })
})

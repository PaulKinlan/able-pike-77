import echoBoard from './boards/echo';


export const setupBreadboard = (button: HTMLButtonElement) => {

  button.addEventListener('click', async () => {
    const output = await echoBoard.runOnce({text: 'Hello, World!'});

    button.innerText = <string> output.text;
  })


}
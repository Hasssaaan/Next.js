function action(){
  alert("Click on button")
}
function MyButton() {
    return (
      <button onClick={action}>I am a button</button>
    );
  }
  export default MyButton;
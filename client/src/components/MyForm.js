function MyForm() {
  const handleInputChange = event => {
    console.log('Input value changed:', event.target.value);
  };
  
  return (
    <div>
      <MyDraggableInput id="my-input" onChange={handleInputChange} />
    </div>
  );
}
 export default MyForm
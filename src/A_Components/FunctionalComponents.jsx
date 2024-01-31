function FunctionalComponent({nama}) {
  return (
    <div>
      <h1>Hi {nama}, welcome to my Landing Page 🪽</h1>
      <p>This component is created with a Functional Component</p>
    </div>
  );
}

FunctionalComponent.defaultProps = {
    nama : 'Bro'
}
export default FunctionalComponent;

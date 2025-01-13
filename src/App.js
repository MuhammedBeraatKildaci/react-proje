function App() {
  return (
    <>
    <div>{process.env.NODE_ENV}</div>
    <p>{process.env.REACT_APP_API_URL}</p>
    <p>{console.log(process.env.REACT_APP_API_URL)}</p>
       hello world

       {
        process.env.NODE_ENV === 'production' && (
          <>
            <div>Merhaba dünya</div>
          </>
        )
       }
    </>
  );
}

export default App;

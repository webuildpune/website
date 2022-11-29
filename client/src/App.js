function App() {
  return (
    <div className="bg-black w-screen h-screen flex flex-col pt-24 ">
      <h1 className="place-self-center flex flex-col ">
        <span className="text-5xl text-center font-bold text-white ">
          We Build
        </span>
        <span className="text-8xl font-bold  text-violet-600 ">Pune</span>
      </h1>
      <div className=" flex flex-co mt-24 mb-2">
        <p className="text-white  w-screen text-center font-bold flex-grow text-transparent text-5xl bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-orange-500 md:text-9xl">
          Coming Soon !
        </p>
      </div>
      <p className="text-white w-screen text-center text-2xl mt-24 mb-4 italic md:text-4xl md:">
        Follow Us
      </p>
      <div className="flex-grow flex justify-evenly md:w-3/4 md:self-center md:mt-12">
        <a
          href="https://www.instagram.com/webuildpune/"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="https://i.ibb.co/8sMWKPf/Untitled-design-30.png"
            className="h-12 w-12 md:h-16 md:w-16 "
          />
        </a>
        <a
          href="https://twitter.com/webuildpune"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="https://i.ibb.co/YZNyQjM/Untitled-design-31.png"
            className="h-12 w-12 md:h-16 md:w-16 "
          />
        </a>
        <a
          href="https://www.linkedin.com/company/webuildpune/"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="https://i.ibb.co/23sVP9t/Untitled-design-32.png"
            className="h-12 w-12 md:h-16 md:w-16 "
          />
        </a>
      </div>
    </div>
  );
}

export default App;

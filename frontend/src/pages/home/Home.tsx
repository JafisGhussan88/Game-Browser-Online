export const Home: React.FC = () => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <header className="text-white body-font bg-gray-800">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <div className="text-white bg-orange-600 border-0 py-1 px-8 focus:outline-none hover:bg-orange-500 rounded-tr-3xl rounded-bl-3xl round text-lg">
              <div style={{ verticalAlign: "inherit" }}>
                <div style={{ verticalAlign: "inherit" }}>Jafis Gamesdfhdsf</div>
              </div>
            </div>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-400">
              <div style={{ verticalAlign: "inherit" }}>
                <div style={{ verticalAlign: "inherit" }}>Home</div>
              </div>
            </a>
            <a className="mr-5 hover:text-gray-400">
              <div style={{ verticalAlign: "inherit" }}>
                <div style={{ verticalAlign: "inherit" }}>Search Games</div>
              </div>
            </a>
            <a className="mr-5 hover:text-gray-400 text-orange-600 animate-pulse">
              <div style={{ verticalAlign: "inherit" }}>
                <div style={{ verticalAlign: "inherit" }}>Library</div>
              </div>
            </a>
          </nav>
          <button className="inline-flex items-center border-2 py-1 px-3 focus:outline-none hover:bg-orange-600 rounded-l-lg rounded-tr-lg text-white1 mt-4 md:mt-0">
            <div style={{ verticalAlign: "inherit" }}>
              <div style={{ verticalAlign: "inherit" }}>Sign In</div>
            </div>
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>

      <main className="flex-grow">
        <section className="h-full bg-gray-900 body-font h-s flex-grow">
          <div className="container px-5 py-24 mx-auto flex-row"></div>
        </section>
      </main>

      <footer className="text-gray-600 body-font bg-gray-800">
        <div className="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <div className="text-white bg-orange-600 border-0 py-1 px-8 focus:outline-none hover:bg-orange-500 rounded-tr-3xl rounded-bl-3xl round text-lg">
              <div style={{ verticalAlign: "inherit" }}>
                <div style={{ verticalAlign: "inherit" }}>Jafis Games</div>
              </div>
            </div>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4" />
          <div style={{ verticalAlign: "inherit" }}>
            <div style={{ verticalAlign: "inherit" }}>
              © 2025 Jafis Games —{" "}
            </div>
          </div>
          <span>
            <a className="ml-3 text-gray-500 px-8">+621 2345 6789</a>
          </span>
        </div>
      </footer>
    </div>
  );
};

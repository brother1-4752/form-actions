export default function Home() {
  return (
    <main style={{ width: "70%" }} className="flex flex-col">
      <header className="flex justify-center py-5">
        <div className=" text-5xl">🔥</div>
      </header>
      <section className="flex justify-center py-5">
        <form className=" flex flex-col w-full px-10 gap-3">
          <input
            className="placeholder-gray-300 h-12 rounded-full px-5 ring-gray-300 focus:ring-4 focus:outline-gray-200"
            type="email"
            placeholder="✉️  Email"
          />
          <input
            className="placeholder-gray-300 h-12 rounded-full px-5 ring-gray-300 focus:ring-4 focus:outline-gray-200"
            type="text"
            placeholder="🧑‍💻  Username"
          />
          <input
            className="placeholder-gray-300 h-12 rounded-full px-5 ring-gray-300 focus:ring-4 focus:outline-gray-200"
            type="password"
            placeholder="🗝️  Password"
          />
          <button
            className="h-12 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition-colors"
            type="submit"
          >
            Log in
          </button>
        </form>
      </section>
    </main>
  );
}

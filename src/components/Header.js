export default function Header() {
  return (
    <div>
      <div className="flex justify-between p-8 bg-stone-800 text-white">
        <div>
          <a className="text-3xl font-logo" href="/">
            Website name
          </a>
        </div>
        <div className="flex space-x-2">
          <button>Jp</button>
          <button>En</button>
        </div>
      </div>
      <div className="flex justify-center space-x-20 text-2xl bg-red-700 text-white">
        <button className=" hover:bg-red-300 p-4">Home</button>
        <button className=" hover:bg-red-300 p-4">About</button>
        <button className=" hover:bg-red-300 p-4">Contact</button>
        <button className=" hover:bg-red-300 p-4">FAQ</button>
      </div>
    </div>
  );
}

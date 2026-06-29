

export const Button = ({children}) => {
  return (
    <div>
      <button className="w-64 text-xl bg-gradient-to-r text-black dark:text-white from-blue-500 via-blue-600 to-blue-700 rounded-lg px-5 py-2.5 mr-2 mb-2 font-medium" >{children}</button>

    </div>
  )
}

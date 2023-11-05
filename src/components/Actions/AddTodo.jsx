import Form from './Form';
const AddTodo = () => {
  console.log("ADD")
  return (
    <>
    <div className="lg:absolute lg:top-0 lg:left-0 bg-orange-100 h-72 lg:h-screen w-full lg:w-1/2 lg:overflow-hidden">
  <span className="font-borel absolute top-4 left-4 font-semibold text-xs sm:text-base">To-Do List</span>
  <div className="pt-2 px-10 sm:px-6 sm:ml-14 flex w-full sm:w-5/6 flex-col h-72 lg:min-h-screen justify-center gap-5 lg:gap-8 ">
    <h3 className="font-rem font-bold min-[360px]:mt-4 text-2xl min-[360px]:text-3xl min-[520px]:text-4xl md:text-5xl">Do you have any plans ?</h3>
    <Form/>
  </div>
</div>
</>
  )
}

export default AddTodo
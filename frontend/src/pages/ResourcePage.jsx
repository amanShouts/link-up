

export default function ResourcePage() {
  console.log("resource page");
  return (
    <div className={'!bg-slate-400 px-4 py-4 grid grid-cols-4 w-full'}>
      <div className={'col-span-1 bg-slate-500 border-[1px] shadow-md w-full'}>
        Saved Resource
      </div>

      <div className="col-span-2 w-full">
        Resource page
      </div>

      <div className="col-span-1 bg-slate-500 w-full">
        Suggested Resource
      </div>
    </div>
  )
}
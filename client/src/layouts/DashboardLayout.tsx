import Sidebar from "@/components/layout/Sidebar";


function DashboardLayout() {
  return (
    <main className="flex">
      <div className=" w-2/12 p-2">
        <Sidebar/>
      </div>
      <div className="w-10/12 p-2">Page Content</div>
    </main>
  );
}

export default DashboardLayout;

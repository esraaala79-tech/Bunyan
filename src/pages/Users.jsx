import { useState } from "react";
import { Outlet } from "react-router-dom";
function Users({setIsDraft}) {
   
  return (
    <section className="py-4">
<Outlet />
</section>
)
}

export default Users;

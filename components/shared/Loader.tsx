'use client'
import { LuLoader2 } from "react-icons/lu";
const Loader = () => (
  <div className="flex-center w-full">
    <div className="animate-spin w-30 h-30">
      <LuLoader2 />
    </div>
  </div>
);

export default Loader;
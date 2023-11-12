
import { typeButtonA } from "@/types";

const ButtonA = ({children, className = ''}: typeButtonA) => {
  
    return (
        <button className={`${className} text-white bg-black px-16 py-5 rounded-lg font-familyA shadow-[6px_6px_0_0_rgba(0,0,0,0.2)] transitionA hover:translate-y-[-6px] hover:shadow-[8px_8px_0_0_rgba(0,0,0,0.2)]`}>
            {children}
        </button>
    );
}

export default ButtonA;
import cn from "classnames";
import maluku from "./flame-maluku.module.css";

export function FireMaluku() {
    return (
        <div className={cn(maluku.fire)}>
        <div className={cn(maluku.fireleft)}>
          <div className={cn(maluku.mainfire)}></div>
          <div className={cn(maluku.particlefire)}></div>
        </div>
        <div className={cn(maluku.firecenter)}>
          <div className={cn(maluku.mainfire)}></div>
          <div className={cn(maluku.particlefire)}></div>
        </div>
        <div className={cn(maluku.fireright)}>
          <div className={cn(maluku.mainfire)}></div>
          <div className={cn(maluku.particlefire)}></div>
        </div>
        <div className={cn(maluku.firebottom)}>
          <div className={cn(maluku.mainfire)}></div>
        </div>
        </div>
    );
  }
import cn from "classnames";
import kalimantan from "./flame-kalimantan.module.css";

export function FireKalimantan() {
    return (
        <div className={cn(kalimantan.fire)}>
        <div className={cn(kalimantan.fireleft)}>
          <div className={cn(kalimantan.mainfire)}></div>
          <div className={cn(kalimantan.particlefire)}></div>
        </div>
        <div className={cn(kalimantan.firecenter)}>
          <div className={cn(kalimantan.mainfire)}></div>
          <div className={cn(kalimantan.particlefire)}></div>
        </div>
        <div className={cn(kalimantan.fireright)}>
          <div className={cn(kalimantan.mainfire)}></div>
          <div className={cn(kalimantan.particlefire)}></div>
        </div>
        <div className={cn(kalimantan.firebottom)}>
          <div className={cn(kalimantan.mainfire)}></div>
        </div>
        </div>
    );
  }
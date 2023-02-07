import cn from "classnames";
import papua from "./flame-papua.module.css";

export function FirePapua() {
    return (
        <div className={cn(papua.fire)}>
        <div className={cn(papua.fireleft)}>
          <div className={cn(papua.mainfire)}></div>
          <div className={cn(papua.particlefire)}></div>
        </div>
        <div className={cn(papua.firecenter)}>
          <div className={cn(papua.mainfire)}></div>
          <div className={cn(papua.particlefire)}></div>
        </div>
        <div className={cn(papua.fireright)}>
          <div className={cn(papua.mainfire)}></div>
          <div className={cn(papua.particlefire)}></div>
        </div>
        <div className={cn(papua.firebottom)}>
          <div className={cn(papua.mainfire)}></div>
        </div>
        </div>
    );
  }
import cn from "classnames";
import sulawesi from "./flame-sulawesi.module.css";

export function FireSulawesi() {
    return (
        <div className={cn(sulawesi.fire)}>
        <div className={cn(sulawesi.fireleft)}>
          <div className={cn(sulawesi.mainfire)}></div>
          <div className={cn(sulawesi.particlefire)}></div>
        </div>
        <div className={cn(sulawesi.firecenter)}>
          <div className={cn(sulawesi.mainfire)}></div>
          <div className={cn(sulawesi.particlefire)}></div>
        </div>
        <div className={cn(sulawesi.fireright)}>
          <div className={cn(sulawesi.mainfire)}></div>
          <div className={cn(sulawesi.particlefire)}></div>
        </div>
        <div className={cn(sulawesi.firebottom)}>
          <div className={cn(sulawesi.mainfire)}></div>
        </div>
        </div>
    );
  }
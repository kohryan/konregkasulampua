import { Navbar } from "nextra-theme-docs";

function Navigation(props) {
    
    const headerItems = props.items.filter((item) => {
      return item.name !== "repo" && item.name !== "pack";
    });
  
    // items last to override the default
    return <Navbar {...props} items={headerItems} />;
  }
  
  export default Navigation;
  
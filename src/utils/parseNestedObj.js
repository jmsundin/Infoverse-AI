import uuid from "react-uuid";
import { transformDataForVisNetwork } from "./transformData";

export default function parseNestedObj(obj) {
  function parseObjProps(obj, parse) {
    for (let k in obj) {
      if (typeof obj[k] === "object" && obj[k] !== null) {
        parseObjProps(obj[k], parse);
      } else if (obj.hasOwnProperty(k)) {
        parse(k, obj[k]);
      }
    }
  }

  function parse(key, obj) {
    if (key === "vars") {
      obj.map((headingLabel) => {
        return <th key={uuid()}>{headingLabel}</th>;
      });
    }
    
    if (key === "bindings") {
      const visNetworkData = transformDataForVisNetwork(obj[key]);
      return visNetworkData;
      }
    
    }
  
  return (
    <>
      {Object.keys(obj).map((key) => {
        if (typeof obj[key] === "object") {
          return parseObjProps(obj[key], parse);
        } else {
          return parse(key, obj);
        }
      })}
    </>
  );
}

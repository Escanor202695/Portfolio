import ScrollIntoView from "react-scroll-into-view";

function nav({ section,handleMenu }) {
  const border =(section !=='contacts')?'border-b-2':null;
  return (
    <ScrollIntoView selector={`.${section}`} smooth>
      <div
        onClick={() => handleMenu()}
        className={`p-3 mx-2 ${border} border-theme text-xl capitalize`}
      >
        {section}
      </div>
    </ScrollIntoView>
  );
}

export default nav;

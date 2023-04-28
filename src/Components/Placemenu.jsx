function Placemenu({ data, loading }) {
  const itemarray = data?.features;
  console.log("in placemenu");
//   console.log(itemarray);

  return (
    <div className="md:w-[700px] mx-auto flex gap-4 flex-wrap p-4">
      {itemarray != undefined &&
        itemarray.map((element, index) => {
          return (
            <div className="cursor-pointer" key={index}>
              {/* {console.log(element?.properties?.name)} */}

              {element?.properties?.name && (
                <span className="list-none font-semibold tracking-wider flex justify-around items-center text-[15px] bg-emerald-600 text-white p-2 rounded-lg">
                  {element?.properties?.address_line1}
                </span>
              )}
            </div>
          );
        })}
    </div>
  );
}

export default Placemenu;

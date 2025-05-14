import Survivor from "../assets/icons/Survivor.svg";
import Meat from "../assets/icons/Meat.svg";
import Wood from "../assets/icons/Wood.svg";
import Stone from "../assets/icons/Stone.svg";

export function ResourcesMenu(props) {
  return (
    <div className="flex items-end justify-center h-screen">
      <div className="w-10/12 h-24 border-2 border-sky-900/70 bg-sky-200/70 backdrop-blur-sm rounded-md flex items-center justify-center">
        <div className="flex flex-row h-16 gap-12">
          <div className="flex flex-row gap-4">
            <img src={Survivor} alt="Survivor" className="w-16" />
            <div className="bg-white w-32 rounded-lg flex items-center justify-center">
              <p className="font-extrabold text-sky-800 text-4xl">
                {props.survivor} / {props.maxSurvivor}
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <img src={Meat} alt="Survivor" className="w-16" />
            <div className="bg-white w-32 rounded-lg flex items-center justify-center">
              <p className="font-extrabold text-sky-800 text-4xl">
                {props.meat}
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <img src={Wood} alt="Survivor" className="w-16" />
            <div className="bg-white w-32 rounded-lg flex items-center justify-center">
              <p className="font-extrabold text-sky-800 text-4xl">
                {props.wood}
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <img src={Stone} alt="Survivor" className="w-16" />
            <div className="bg-white w-32 rounded-lg flex items-center justify-center">
              <p className="font-extrabold text-sky-800 text-4xl">
                {props.stone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

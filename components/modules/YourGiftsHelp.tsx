import { touchPointsSummary } from "constants/touchPoints";

export const YourGiftsHelp = () => {
  return (
    <div>
      <h2>Your gifts help achieve the following;</h2>

      <div className="mt-5">
        {touchPointsSummary.map((value) => {
          return (
            <div className="flex py-1.5 align-middle" key={value}>
              <div className="green-pill">{value}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

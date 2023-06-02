import { CleaningProducts, ReactionsData } from "../../data/experimental-data";
import { ExperimantalTable } from "../experimental-table";
import { Message } from "../message";
import { Sample } from "../sample";

interface TabletExperimentProps {
  sampels: CleaningProducts[];
  itemList: CleaningProducts[];
  reaction: ReactionsData;
  message: string[];
  onTouchStart: (id: string) => void;
  onTouchMove: (e: React.TouchEvent<HTMLDivElement>) => void;
  onTouchEnd: (e: React.TouchEvent<HTMLDivElement>) => void;
  onTouchCancel: (e: React.TouchEvent<HTMLDivElement>) => void;
  onRemoveSampel: (id: string) => void;
  onCleanTable: () => void;
  onMix: () => void;
  onCloseMessage: () => void;
};

export const TabletExperiment:React.FC<TabletExperimentProps> = ({
  sampels,
  itemList,
  reaction,
  message,
  onTouchStart,
  onTouchMove,
  onTouchEnd,
  onTouchCancel,
  onRemoveSampel,
  onCleanTable,
  onMix,
  onCloseMessage,
}) => {
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>, id: string) => {
    e.preventDefault();
    onTouchStart(id);
  };

  return (
    <>
      {sampels.map((sampel, index) => (
        <div key={sampel.id} className={`experiment-sampel experiment-sampel${index}`}>
          <Sample
            name={sampel.name}
            image={sampel.image}
            forDevice='isTablet'
            selected={itemList.find(experimentItem => experimentItem.id === sampel.id) ? true : false}
            onTouchStart={(e) => handleTouchStart(e, sampel.id)}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onTouchCancel={onTouchCancel}
          />
        </div>
      ))}
      <ExperimantalTable
        itemList={itemList}
        reaction={reaction}
        onRemove={onRemoveSampel}
        onClose={onCleanTable}
        onMix={onMix}
      />
      {message.length > 1 && (
        <Message message={message} onClose={onCloseMessage} />
      )}
    </>
  );
};

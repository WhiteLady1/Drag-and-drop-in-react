import { CleaningProducts, ReactionsData } from "../../data/experimental-data"
import { ExperimantalTable } from "../experimental-table";
import { Message } from "../message";
import { Sample } from "../sample";

interface DesktopExperimentProps {
  sampels: CleaningProducts[];
  itemList: CleaningProducts[];
  reaction: ReactionsData;
  message: string[],
  onDragSampel: (id: string) => void;
  onDropSampel: () => void;
  onRemoveSampel: (id: string) => void;
  onCleanTable: () => void;
  onMix: () => void;
  onCloseMessage: () => void;
};

export const DesktopExperiment: React.FC<DesktopExperimentProps> = ({
  sampels,
  itemList,
  reaction,
  message,
  onDragSampel,
  onDropSampel,
  onRemoveSampel,
  onCleanTable,
  onMix,
  onCloseMessage,
}) => (
  <>
    {sampels.map((sampel, index) => (
      <div key={sampel.id} className={`experiment-sampel experiment-sampel${index}`}>
        <Sample
          name={sampel.name}
          image={sampel.image}
          forDevice='isDesktop'
          selected={itemList.find(experimentItem => experimentItem.id === sampel.id) ? true : false}
          onDrag={() => onDragSampel(sampel.id)}
        />
      </div>
    ))}
    <ExperimantalTable
      itemList={itemList}
      reaction={reaction}
      onDrop={onDropSampel}
      onRemove={onRemoveSampel}
      onClose={onCleanTable}
      onMix={onMix}
    />
    {message.length > 1 && (
      <Message message={message} onClose={onCloseMessage} />
    )}
  </>
);

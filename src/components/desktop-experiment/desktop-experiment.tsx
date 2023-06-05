import { CleaningProducts, ReactionsData } from "../../data/experimental-data"
import { ExperimantalTable } from "../experimental-table";
import { Sample } from "../sample";

interface DesktopExperimentProps {
  samples: CleaningProducts[];
  itemList: CleaningProducts[];
  reaction: ReactionsData;
  onDragSampel: (id: string) => void;
  onDropSampel: () => void;
  onRemoveSampel: (id: string) => void;
  onCleanTable: () => void;
  onMix: () => void;
};

export const DesktopExperiment: React.FC<DesktopExperimentProps> = ({
  samples,
  itemList,
  reaction,
  onDragSampel,
  onDropSampel,
  onRemoveSampel,
  onCleanTable,
  onMix,
}) => (
  <>
    {samples.map((sampel, index) => (
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
  </>
);

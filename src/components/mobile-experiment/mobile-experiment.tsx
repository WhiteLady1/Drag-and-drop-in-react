import { CleaningProducts, ReactionsData } from "../../data/experimental-data";
import { ExperimantalTable } from "../experimental-table";
import { SalectSamples, SelecSampel } from "../select-sampels";

interface MobileExperimentProps {
  samples: SelecSampel[];
  itemList: CleaningProducts[];
  reaction: ReactionsData;
  onSelectSampel: (id: string) => void;
  onRemoveSampel: (id: string) => void;
  onCleanTable: () => void;
  onMix: () => void;
};

export const MobileExperiment: React.FC<MobileExperimentProps> = ({
  samples,
  itemList,
  reaction,
  onSelectSampel,
  onRemoveSampel,
  onCleanTable,
  onMix,
}) => {
  return (
    <>
      <SalectSamples options={samples} onSelect={onSelectSampel} />
      <ExperimantalTable
        itemList={itemList}
        reaction={reaction}
        onRemove={onRemoveSampel}
        onClose={onCleanTable}
        onMix={onMix}
      />
    </>
  );
};

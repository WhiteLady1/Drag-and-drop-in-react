import { CleaningProducts, ReactionsData } from "../../data/experimental-data";
import { ExperimantalTable } from "../experimental-table";
import { SalectSamples, SelecSample } from "../select-samples";

interface MobileExperimentProps {
  samples: SelecSample[];
  itemList: CleaningProducts[];
  reaction: ReactionsData;
  disabledSecondSelect: boolean;
  onSelectSampel: (sampleId: string, id: string) => void;
  onRemoveSampel: (id: string) => void;
  onCleanTable: () => void;
  onMix: () => void;
};

export const MobileExperiment: React.FC<MobileExperimentProps> = ({
  samples,
  itemList,
  reaction,
  disabledSecondSelect,
  onSelectSampel,
  onRemoveSampel,
  onCleanTable,
  onMix,
}) => {
  return (
    <>
      <SalectSamples options={samples} isDisabled={disabledSecondSelect} onSelect={onSelectSampel} />
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

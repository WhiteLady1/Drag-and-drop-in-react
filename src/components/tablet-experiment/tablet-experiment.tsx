import React from "react";
import { CleaningProducts, ReactionsData } from "../../data/experimental-data";
import { ExperimantalTable } from "../experimental-table";
import { Sample } from "../sample";

interface TabletExperimentProps {
  samples: CleaningProducts[];
  itemList: CleaningProducts[];
  reaction: ReactionsData;
  onTouchStart: (id: string) => void;
  onTouchEnd: (e: React.TouchEvent<HTMLDivElement>) => void;
  onTouchCancel: (e: React.TouchEvent<HTMLDivElement>) => void;
  onRemoveSampel: (id: string) => void;
  onCleanTable: () => void;
  onMix: () => void;
};

export const TabletExperiment:React.FC<TabletExperimentProps> = ({
  samples,
  itemList,
  reaction,
  onTouchStart,
  onTouchEnd,
  onTouchCancel,
  onRemoveSampel,
  onCleanTable,
  onMix,
}) => {
  const [sample, setSample] = React.useState<CleaningProducts>();
  const [sampleCoordinates, setSampleCoordinates] = React.useState<number[]>();

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>, id: string) => {
    e.preventDefault();
    setSampleCoordinates([e.touches[0].pageY, e.touches[0].pageX]);
    setSample(samples.find(sample => sample.id === id) && samples.find(sample => sample.id === id));
    onTouchStart(id);
  };

  const handleTouchMove = (x: number, y: number) => {
    setSampleCoordinates([x, y]);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    onTouchEnd(e);
    setSampleCoordinates(undefined);
  };

  return (
    <>
      {samples.map((sampel, index) => (
        <div key={sampel.id} className={`experiment-sampel experiment-sampel${index}`}>
          <Sample
            name={sampel.name}
            image={sampel.image}
            forDevice='isTablet'
            selected={itemList.find(experimentItem => experimentItem.id === sampel.id) ? true : false}
            onTouchStart={(e) => handleTouchStart(e, sampel.id)}
            onTouchMove={(e) => handleTouchMove(e.changedTouches[0].pageY, e.changedTouches[0].pageX)}
            onTouchEnd={handleTouchEnd}
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
      {sample && sampleCoordinates && <Sample   forDevice='isTablet' name={sample.name} image={sample?.image} coordinates={sampleCoordinates} />}
    </>
  );
};

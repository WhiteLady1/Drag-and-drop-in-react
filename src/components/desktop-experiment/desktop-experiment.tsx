import React from "react";
import { CleaningProducts, ReactionsData } from "../../data/experimental-data"
import { ExperimantalTable } from "../experimental-table";
import { Sample } from "../sample";

import './desktop-experiment.scss';

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
}) => {
  const [width, setWidth] = React.useState<number>();

  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    const containerWidth: number | undefined = containerRef.current?.offsetWidth;
    setWidth(containerWidth);
  },[])

  const getTransformation = (index: number, length: number, width: number) => {
    const angle = (2 * Math.PI) / length;
    const x = Math.cos(angle * index) * width;
    const y = Math.sin(angle * index) * width;
    return [y, x];
  };

  return (
    <div ref={containerRef} className="desktop-experiment">
      {width && samples.map((sampel, index) => (
        <div key={sampel.id} className={`experiment-sampel experiment-sampel${index}`}>
          <Sample
            name={sampel.name}
            image={sampel.image}
            forDevice='isDesktop'
            coordinates={getTransformation(index, samples.length, 300)}
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
    </div>
  );
}
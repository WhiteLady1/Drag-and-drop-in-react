import React from "react";
import { CleaningProducts, ReactionsData } from "../../data/experimental-data";
import { ExperimantalTable } from "../experimental-table";
import { Sample } from "../sample";

import './tablet-experiment.scss';

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
  const [sampleImgCoordinates, setSampleImgCoordinates] = React.useState<number[]>();
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

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>, id: string) => {
    e.preventDefault();
    setSampleImgCoordinates([e.touches[0].pageY, e.touches[0].pageX]);
    setSample(samples.find(sample => sample.id === id) && samples.find(sample => sample.id === id));
    onTouchStart(id);
    console.log([e.touches[0].pageY, e.touches[0].pageX]);
  };

  const handleTouchMove = (x: number, y: number) => {
    setSampleImgCoordinates([x, y]);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    onTouchEnd(e);
    setSampleImgCoordinates(undefined);
  };

  return (
    <div ref={containerRef} className="tablet-experiment">
      {width && samples.map((sampel, index) => (
        <Sample
          key={sampel.id}
          name={sampel.name}
          image={sampel.image}
          forDevice='isTablet'
          coordinates={getTransformation(index, samples.length, 300)}
          onTouchStart={(e) => handleTouchStart(e, sampel.id)}
          onTouchMove={(e) => handleTouchMove(e.changedTouches[0].pageY, e.changedTouches[0].pageX)}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={onTouchCancel}
        />
      ))}
      <ExperimantalTable
        itemList={itemList}
        reaction={reaction}
        onRemove={onRemoveSampel}
        onClose={onCleanTable}
        onMix={onMix}
      />
      {sample && sampleImgCoordinates && (
        <span className='experiment-sampel__preview-img' style={{
          top: `${sampleImgCoordinates[0] - (width ? width/2 : 0)}px`,
          left: `${sampleImgCoordinates[1] - 110}px`,
          backgroundImage: `url(${sample.image})`,
        }} />
      )}
    </div>
  );
};
